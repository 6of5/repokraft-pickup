console.log("-- task map_hdi_schemas v0.1.0 --");
console.log("---------------------------------");

const hanaClient = require("@sap/hana-client");
const hanaClientPromise = require("@sap/hana-client/extension/Promise.js");

const xsenv = require("@sap/xsenv");
xsenv.loadEnv();

console.log("TARGET_CONTAINER: " + process.env.TARGET_CONTAINER);

if (!process.env.TARGET_CONTAINER) {
    console.error("No TARGET_CONTAINER specified");
    return;
}

let hanaConfig = xsenv.cfServiceCredentials(process.env.TARGET_CONTAINER);
//console.log(hanaConfig);

if (!hanaConfig) {
    console.error("No Service Credentials for TARGET_CONTAINER specified");
    return;
}

let connParams = {
    serverNode: hanaConfig.host + ":" + hanaConfig.port,
    uid: hanaConfig.user,
    pwd: hanaConfig.password,
    ca: hanaConfig.certificate,
    encrypt: hanaConfig.encrypt ? hanaConfig.encrypt : true,
    sslValidateCertificate: hanaConfig.sslValidateCertificate ? hanaConfig.sslValidateCertificate : true
};
//console.log(connParams);

let hanaServices = xsenv.filterServices({
    label: "hana"
});
//console.log(hanaServices);

if (!hanaServices || hanaServices.length < 1) {
    console.error("No HANA Service found");
    return;
}

async function main() {
    try {
        await hanaExe("DELETE FROM " + hanaConfig.schema + ".PICKUP_SCHEMA");
        for (let service of hanaServices) {
            console.log(service.name + " Schema: " + service.credentials.schema);
            let sQuery = "UPSERT " +
                hanaConfig.schema + ".PICKUP_SCHEMA VALUES ('" +
                service.name + "','hana','" +
                service.instance_name + "',now(),'" +
                service.plan + "','" +
                service.credentials.schema + "') WITH PRIMARY KEY;"
            await hanaExe(sQuery);
        }

        let result = await hanaExe('SELECT * FROM ' + hanaConfig.schema + '.' + 'PICKUP_SCHEMA');
        return result;
    } catch (error) {
        console.error(error);
    }
}

main().then(result => {
    console.table(result);
    console.log("FERTIG");
});


async function hanaExe(dbQuery) {
    try {
        let conn = hanaClient.createConnection();
        await hanaClientPromise.connect(conn, connParams);
        let result = await hanaClientPromise.exec(conn, dbQuery);
        conn.disconnect();
        return result;
    } catch (error) {
        throw error;
    }
}

