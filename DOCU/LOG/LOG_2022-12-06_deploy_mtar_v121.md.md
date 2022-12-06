# Log - Deploy MTAR from terminal (VSCode) and download logs of mtar deployment

[Back to Change Log](../CHANGELOG.md)

## Deployment of MTAR via SAP BAS

```shell
cf deploy mta_archives/repokraft_pickup_1.2.1.mtar
```

Output
```shell
node ➜ /workspaces/repokraft-pickup (master ✗) $ cf deploy mta_archives/repokraft_pickup_1.2.1.mtar 
Deploying multi-target app archive mta_archives/repokraft_pickup_1.2.1.mtar in org 9a4c047ftrial / space dev as hp+blue@hanadevs.de...


There is an ongoing operation for multi-target app repokraft_pickup. Do you want to abort it? (y/n)> y
Executing action 'abort' on operation 96172b49-7569-11ed-bcd4-eeee0a9352b4...
OK
Uploading 1 files...
  /workspaces/repokraft-pickup/mta_archives/repokraft_pickup_1.2.1.mtar
OK
Operation ID: 1f427f1e-756d-11ed-9242-eeee0a9352c3
Deploying in org "9a4c047ftrial" and space "dev"
Detected MTA schema version: "3"
Detected deployed MTA with ID "repokraft_pickup" and version "1.2.0"
Detected new MTA version: "1.2.1"
Deployed MTA version: "1.2.0"
Processing service "pickup_hdi"...
1 of 1 done
Updating application "pickup_db"...
Unbinding service instance "pickup_hdi" from application "pickup_db"...
Unbinding service instance "repoiodb_mtar" from application "pickup_db"...
Binding service instance "pickup_hdi" to application "pickup_db"...
Binding service instance "repoiodb_mtar" to application "pickup_db"...
Uploading application "pickup_db"...
Started async upload of application "pickup_db"
Scaling application "pickup_db" to "1" instances... 
Staging application "pickup_db"...
Application "pickup_db" staged
Executing task "deploy" on application "pickup_db"...
Skipping deletion of services, because the command line option "--delete-services" is not specified.
Process finished.
Use "cf dmol -i 1f427f1e-756d-11ed-9242-eeee0a9352c3" to download the logs of the process.
```

## Download Logs from pickup_db app

```shell
cf logs pickup_db --recent > db-deployment-log.txt
```

```shell
Retrieving logs for app pickup_db in org 9a4c047ftrial / space dev as hp+blue@hanadevs.de...

   2022-12-06T13:26:34.62+0000 [API/23] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"lifecycle"=>{"data"=>{}, "type"=>"buildpack"}})
   2022-12-06T13:26:34.77+0000 [API/16] OUT Updating process: "web"
   2022-12-06T13:26:57.57+0000 [API/25] OUT Uploading app package for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-06T13:26:57.78+0000 [API/3] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"environment_variables"=>"[PRIVATE DATA HIDDEN]"})
   2022-12-06T13:27:18.14+0000 [API/14] OUT Scaling process: "web"
   2022-12-06T13:27:18.45+0000 [API/30] OUT Creating build for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-06T13:27:19.23+0000 [STG/0] OUT Downloading sap_java_buildpack_1_59...
   2022-12-06T13:27:19.23+0000 [STG/0] OUT Downloading go_buildpack...
   2022-12-06T13:27:19.23+0000 [STG/0] OUT Downloading r_buildpack...
   2022-12-06T13:27:19.23+0000 [STG/0] OUT Downloading sap_java_buildpack...
   2022-12-06T13:27:19.24+0000 [STG/0] OUT Downloading binary_buildpack...
   2022-12-06T13:27:19.28+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_59
   2022-12-06T13:27:19.28+0000 [STG/0] OUT Downloading ruby_buildpack...
   2022-12-06T13:27:19.28+0000 [STG/0] OUT Downloaded sap_java_buildpack
   2022-12-06T13:27:19.28+0000 [STG/0] OUT Downloading staticfile_buildpack...
   2022-12-06T13:27:19.28+0000 [STG/0] OUT Downloaded binary_buildpack
   2022-12-06T13:27:19.28+0000 [STG/0] OUT Downloading java_buildpack...
   2022-12-06T13:27:19.28+0000 [STG/0] OUT Downloaded r_buildpack
   2022-12-06T13:27:19.28+0000 [STG/0] OUT Downloading dotnet_core_buildpack...
   2022-12-06T13:27:19.29+0000 [STG/0] OUT Downloaded go_buildpack
   2022-12-06T13:27:19.29+0000 [STG/0] OUT Downloading php_buildpack...
   2022-12-06T13:27:19.30+0000 [STG/0] OUT Downloaded dotnet_core_buildpack
   2022-12-06T13:27:19.30+0000 [STG/0] OUT Downloading python_buildpack...
   2022-12-06T13:27:19.31+0000 [STG/0] OUT Downloaded python_buildpack
   2022-12-06T13:27:19.31+0000 [STG/0] OUT Downloading sap_java_buildpack_1_60...
   2022-12-06T13:27:19.32+0000 [STG/0] OUT Downloaded ruby_buildpack
   2022-12-06T13:27:19.32+0000 [STG/0] OUT Downloading sap_java_buildpack_1_63...
   2022-12-06T13:27:19.32+0000 [STG/0] OUT Downloaded java_buildpack
   2022-12-06T13:27:19.32+0000 [STG/0] OUT Downloading nginx_buildpack...
   2022-12-06T13:27:19.32+0000 [STG/0] OUT Downloaded php_buildpack
   2022-12-06T13:27:19.32+0000 [STG/0] OUT Downloading nodejs_buildpack...
   2022-12-06T13:27:19.33+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_60
   2022-12-06T13:27:19.33+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_63
   2022-12-06T13:27:19.34+0000 [STG/0] OUT Downloaded nodejs_buildpack
   2022-12-06T13:27:19.34+0000 [STG/0] OUT Downloaded staticfile_buildpack
   2022-12-06T13:27:19.36+0000 [STG/0] OUT Downloaded nginx_buildpack
   2022-12-06T13:27:19.36+0000 [STG/0] OUT Cell d89356d5-8b8d-4fb9-b939-143db8dad6d7 creating container for instance c11040e6-2534-4fe6-9269-cbccfb45dd4d
   2022-12-06T13:27:19.71+0000 [STG/0] OUT Cell d89356d5-8b8d-4fb9-b939-143db8dad6d7 successfully created container for instance c11040e6-2534-4fe6-9269-cbccfb45dd4d
   2022-12-06T13:27:20.04+0000 [STG/0] OUT Downloading build artifacts cache...
   2022-12-06T13:27:20.04+0000 [STG/0] OUT Downloading app package...
   2022-12-06T13:27:20.11+0000 [STG/0] OUT Downloaded build artifacts cache (224B)
   2022-12-06T13:27:24.37+0000 [STG/0] OUT Downloaded app package (118.6M)
   2022-12-06T13:27:24.89+0000 [STG/0] OUT -----> Nodejs Buildpack version 1.8.1
   2022-12-06T13:27:25.62+0000 [STG/0] OUT -----> Installing binaries
   2022-12-06T13:27:25.62+0000 [STG/0] OUT engines.node (package.json): ^16
   2022-12-06T13:27:25.62+0000 [STG/0] OUT engines.npm (package.json): unspecified (use default)
   2022-12-06T13:27:25.62+0000 [STG/0] OUT -----> Installing node 16.17.1
   2022-12-06T13:27:25.62+0000 [STG/0] OUT Copy [/tmp/buildpacks/3118e939268fccf3a3ade4df9e465176/dependencies/33da2d39aed1341b8fa53e663d60b54c/node_16.17.1_linux_x64_cflinuxfs3_c74713ec.tgz]
   2022-12-06T13:27:27.00+0000 [STG/0] OUT Using default npm version: 8.15.0
   2022-12-06T13:27:27.00+0000 [STG/0] OUT -----> Installing yarn 1.22.19
   2022-12-06T13:27:27.00+0000 [STG/0] OUT Copy [/tmp/buildpacks/3118e939268fccf3a3ade4df9e465176/dependencies/0f06052381cbcef1593bd279ca3d9458/yarn_1.22.19_linux_noarch_any-stack_32d0e82e.tgz]
   2022-12-06T13:27:27.31+0000 [STG/0] OUT Installed yarn 1.22.19
   2022-12-06T13:27:27.31+0000 [STG/0] OUT -----> Creating runtime environment
   2022-12-06T13:27:27.31+0000 [STG/0] OUT NODE_ENV=production
   2022-12-06T13:27:27.31+0000 [STG/0] OUT NODE_HOME=/tmp/contents3025379943/deps/0/node
   2022-12-06T13:27:27.31+0000 [STG/0] OUT NODE_MODULES_CACHE=true
   2022-12-06T13:27:27.31+0000 [STG/0] OUT NODE_VERBOSE=false
   2022-12-06T13:27:27.31+0000 [STG/0] OUT NPM_CONFIG_LOGLEVEL=error
   2022-12-06T13:27:27.31+0000 [STG/0] OUT NPM_CONFIG_PRODUCTION=true
   2022-12-06T13:27:27.31+0000 [STG/0] OUT -----> Building dependencies
   2022-12-06T13:27:27.31+0000 [STG/0] OUT Prebuild detected (node_modules already exists)
   2022-12-06T13:27:27.31+0000 [STG/0] OUT Rebuilding any native modules
   2022-12-06T13:27:28.09+0000 [STG/0] OUT rebuilt dependencies successfully
   2022-12-06T13:27:28.09+0000 [STG/0] OUT npm notice
   2022-12-06T13:27:28.09+0000 [STG/0] OUT npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-06T13:27:28.09+0000 [STG/0] OUT npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-06T13:27:28.09+0000 [STG/0] OUT npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-06T13:27:28.09+0000 [STG/0] OUT npm notice
   2022-12-06T13:27:28.10+0000 [STG/0] OUT Installing any new modules (package.json + package-lock.json)
   2022-12-06T13:27:28.58+0000 [STG/0] OUT up to date in 210ms
   2022-12-06T13:27:29.69+0000 [STG/0] OUT Contrast Security no credentials found. Will not write environment files.
   2022-12-06T13:27:29.69+0000 [STG/0] OUT inside Sealights hook
   2022-12-06T13:27:29.69+0000 [STG/0] OUT service is not configured to run with Sealights
   2022-12-06T13:27:50.95+0000 [STG/0] OUT Exit status 0
   2022-12-06T13:27:50.95+0000 [STG/0] OUT Uploading droplet, build artifacts cache...
   2022-12-06T13:27:50.95+0000 [STG/0] OUT Uploading build artifacts cache...
   2022-12-06T13:27:50.95+0000 [STG/0] OUT Uploading droplet...
   2022-12-06T13:27:50.98+0000 [STG/0] OUT Uploaded build artifacts cache (224B)
   2022-12-06T13:27:52.57+0000 [API/25] OUT Creating droplet for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-06T13:28:01.45+0000 [STG/0] OUT Uploaded droplet (150.9M)
   2022-12-06T13:28:01.48+0000 [STG/0] OUT Uploading complete
   2022-12-06T13:28:01.68+0000 [STG/0] OUT Cell d89356d5-8b8d-4fb9-b939-143db8dad6d7 stopping instance c11040e6-2534-4fe6-9269-cbccfb45dd4d
   2022-12-06T13:28:01.68+0000 [STG/0] OUT Cell d89356d5-8b8d-4fb9-b939-143db8dad6d7 destroying container for instance c11040e6-2534-4fe6-9269-cbccfb45dd4d
   2022-12-06T13:28:02.26+0000 [STG/0] OUT Cell d89356d5-8b8d-4fb9-b939-143db8dad6d7 successfully destroyed container for instance c11040e6-2534-4fe6-9269-cbccfb45dd4d
   2022-12-06T13:28:08.25+0000 [API/30] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({:droplet_guid=>"85dbc8dd-f671-4f7c-b610-f36ac3ed8081"})
   2022-12-06T13:28:08.90+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f creating container for instance 7ec89bbb-9152-4601-a1f8-f5c0f6a44a6e
   2022-12-06T13:28:09.21+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully created container for instance 7ec89bbb-9152-4601-a1f8-f5c0f6a44a6e
   2022-12-06T13:28:17.55+0000 [APP/TASK/deploy/0] OUT > start
   2022-12-06T13:28:17.55+0000 [APP/TASK/deploy/0] OUT > node node_modules/@sap/hdi-deploy/deploy.js --exit && node tasks/map_hdi_schemas.js
   2022-12-06T13:28:19.44+0000 [APP/TASK/deploy/0] OUT @sap/hdi-deploy, version 4.5.1 (mode default), server version 4.00.000.00.1668498444 (4.0.0.0), node version 16.17.1, HDI version 1009, container API version 1004
   2022-12-06T13:28:19.44+0000 [APP/TASK/deploy/0] OUT Deployment started at 2022-12-06 13:28:19
   2022-12-06T13:28:19.44+0000 [APP/TASK/deploy/0] OUT Using hana-client for connection
   2022-12-06T13:28:19.44+0000 [APP/TASK/deploy/0] OUT Using service replacements from environment variable "SERVICE_REPLACEMENTS" with 1 replacements
   2022-12-06T13:28:19.55+0000 [APP/TASK/deploy/0] OUT No ignore file at /home/vcap/app/.hdiignore.
   2022-12-06T13:28:19.55+0000 [APP/TASK/deploy/0] OUT Collecting files...
   2022-12-06T13:28:19.55+0000 [APP/TASK/deploy/0] OUT Collecting files... ok (0s 4ms)
   2022-12-06T13:28:19.55+0000 [APP/TASK/deploy/0] OUT 4 directories collected
   2022-12-06T13:28:19.55+0000 [APP/TASK/deploy/0] OUT 14 files collected
   2022-12-06T13:28:19.55+0000 [APP/TASK/deploy/0] OUT 0 reusable modules collected
   2022-12-06T13:28:19.55+0000 [APP/TASK/deploy/0] OUT Target service: pickup_hdi
   2022-12-06T13:28:19.85+0000 [APP/TASK/deploy/0] OUT Session variable APPLICATION is set to "SAP_HDI/dev/9a4c047ftrial".
   2022-12-06T13:28:20.22+0000 [APP/TASK/deploy/0] OUT Previous build with request ID 305 finished at 2022-12-05 20:06:44.367196000 with status Rolled back and message: Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok.
   2022-12-06T13:28:20.22+0000 [APP/TASK/deploy/0] OUT Processing revoke files...
   2022-12-06T13:28:20.22+0000 [APP/TASK/deploy/0] OUT Processing revoke files... ok (0s 0ms)
   2022-12-06T13:28:20.22+0000 [APP/TASK/deploy/0] OUT Processing grants files...
   2022-12-06T13:28:20.22+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"...
   2022-12-06T13:28:20.22+0000 [APP/TASK/deploy/0] OUT Using grantor service "repoiodb_grantor" of type "hdi"
   2022-12-06T13:28:20.96+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"... ok
   2022-12-06T13:28:20.96+0000 [APP/TASK/deploy/0] OUT Processing grants files... ok (0s 742ms)
   2022-12-06T13:28:20.96+0000 [APP/TASK/deploy/0] OUT Preprocessing files...
   2022-12-06T13:28:20.96+0000 [APP/TASK/deploy/0] OUT Preprocessing files... ok (0s 0ms)
   2022-12-06T13:28:20.96+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"...
   2022-12-06T13:28:21.17+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"... ok (0s 212ms)
   2022-12-06T13:28:21.17+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"...
   2022-12-06T13:28:21.60+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"... ok (0s 431ms)
   2022-12-06T13:28:21.60+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"...
   2022-12-06T13:28:21.60+0000 [APP/TASK/deploy/0] OUT Deleting files...
   2022-12-06T13:28:21.83+0000 [APP/TASK/deploy/0] OUT Deleting files... ok
   2022-12-06T13:28:21.83+0000 [APP/TASK/deploy/0] OUT Writing files...
   2022-12-06T13:28:22.25+0000 [APP/TASK/deploy/0] OUT Writing files... ok
   2022-12-06T13:28:22.25+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"... ok (0s 645ms)
   2022-12-06T13:28:22.51+0000 [APP/TASK/deploy/0] OUT added files: []
   2022-12-06T13:28:22.51+0000 [APP/TASK/deploy/0] OUT modified files: []
   2022-12-06T13:28:22.51+0000 [APP/TASK/deploy/0] OUT deleted files: []
   2022-12-06T13:28:22.51+0000 [APP/TASK/deploy/0] OUT 0 modified or added files are scheduled for deploy based on delta detection
   2022-12-06T13:28:22.51+0000 [APP/TASK/deploy/0] OUT 0 deleted files are scheduled for undeploy based on delta detection (filtered by undeploy allowlist)
   2022-12-06T13:28:22.51+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for deploy based on explicit specification
   2022-12-06T13:28:22.51+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for undeploy based on explicit specification
   2022-12-06T13:28:22.51+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"...
   2022-12-06T13:28:22.76+0000 [APP/TASK/deploy/0] OUT Polling messages for request id: 314
   2022-12-06T13:28:22.79+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy...
   2022-12-06T13:28:22.79+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"...
   2022-12-06T13:28:22.79+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"... ok  (0s 12ms)
   2022-12-06T13:28:22.79+0000 [APP/TASK/deploy/0] OUT Migrating libraries...
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Migrating libraries... ok  (2s 171ms)
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Making...
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Preparing...
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Preparing... ok  (0s 0ms)
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT No make necessary
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Making... ok  (0s 190ms)
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"...
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"... ok  (0s 48ms)
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok  (2s 428ms)
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"... ok (2s 631ms)
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT No default-access-role handling needed; global role "PICKUP::access_role" will not be adapted
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"...
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"... ok (0s 0ms)
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Deployment to container PICKUP done [Deployment ID: none].
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT Deployment ended at 2022-12-06 13:28:25
   2022-12-06T13:28:25.14+0000 [APP/TASK/deploy/0] OUT (7s 302ms)
   2022-12-06T13:28:25.25+0000 [APP/TASK/deploy/0] OUT -- task map_hdi_schemas v0.1.0 --
   2022-12-06T13:28:25.25+0000 [APP/TASK/deploy/0] OUT ---------------------------------
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR node:internal/modules/cjs/loader:959
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR throw err;
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR ^
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR Error: Cannot find module '@sap/xsenv'
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR Require stack:
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR - /home/vcap/app/tasks/map_hdi_schemas.js
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Function.Module._resolveFilename (node:internal/modules/cjs/loader:956:15)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Function.Module._load (node:internal/modules/cjs/loader:804:27)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Module.require (node:internal/modules/cjs/loader:1028:19)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at require (node:internal/modules/cjs/helpers:102:18)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Object.<anonymous> (/home/vcap/app/tasks/map_hdi_schemas.js:7:15)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Module._compile (node:internal/modules/cjs/loader:1126:14)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Module.load (node:internal/modules/cjs/loader:1004:32)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Function.Module._load (node:internal/modules/cjs/loader:839:12)
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR code: 'MODULE_NOT_FOUND',
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR requireStack: [ '/home/vcap/app/tasks/map_hdi_schemas.js' ]
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR }
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-06T13:28:25.35+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:28:25.36+0000 [APP/TASK/deploy/0] OUT Exit status 1
   2022-12-06T13:28:25.82+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f stopping instance 7ec89bbb-9152-4601-a1f8-f5c0f6a44a6e
   2022-12-06T13:28:25.82+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f destroying container for instance 7ec89bbb-9152-4601-a1f8-f5c0f6a44a6e
   2022-12-06T13:28:27.17+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully destroyed container for instance 7ec89bbb-9152-4601-a1f8-f5c0f6a44a6e
   2022-12-06T13:28:30.07+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f creating container for instance c23524d6-97eb-4640-a2b4-65ad0132a675
   2022-12-06T13:28:30.39+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully created container for instance c23524d6-97eb-4640-a2b4-65ad0132a675
   2022-12-06T13:28:38.84+0000 [APP/TASK/deploy/0] OUT > start
   2022-12-06T13:28:38.84+0000 [APP/TASK/deploy/0] OUT > node node_modules/@sap/hdi-deploy/deploy.js --exit && node tasks/map_hdi_schemas.js
   2022-12-06T13:28:40.77+0000 [APP/TASK/deploy/0] OUT @sap/hdi-deploy, version 4.5.1 (mode default), server version 4.00.000.00.1668498444 (4.0.0.0), node version 16.17.1, HDI version 1009, container API version 1004
   2022-12-06T13:28:40.77+0000 [APP/TASK/deploy/0] OUT Deployment started at 2022-12-06 13:28:40
   2022-12-06T13:28:40.77+0000 [APP/TASK/deploy/0] OUT Using hana-client for connection
   2022-12-06T13:28:40.77+0000 [APP/TASK/deploy/0] OUT Using service replacements from environment variable "SERVICE_REPLACEMENTS" with 1 replacements
   2022-12-06T13:28:40.85+0000 [APP/TASK/deploy/0] OUT No ignore file at /home/vcap/app/.hdiignore.
   2022-12-06T13:28:40.85+0000 [APP/TASK/deploy/0] OUT Collecting files...
   2022-12-06T13:28:40.86+0000 [APP/TASK/deploy/0] OUT Collecting files... ok (0s 5ms)
   2022-12-06T13:28:40.86+0000 [APP/TASK/deploy/0] OUT 4 directories collected
   2022-12-06T13:28:40.86+0000 [APP/TASK/deploy/0] OUT 14 files collected
   2022-12-06T13:28:40.86+0000 [APP/TASK/deploy/0] OUT 0 reusable modules collected
   2022-12-06T13:28:40.86+0000 [APP/TASK/deploy/0] OUT Target service: pickup_hdi
   2022-12-06T13:28:41.17+0000 [APP/TASK/deploy/0] OUT Session variable APPLICATION is set to "SAP_HDI/dev/9a4c047ftrial".
   2022-12-06T13:28:41.45+0000 [APP/TASK/deploy/0] OUT Previous build with request ID 314 finished at 2022-12-06 13:28:25.105791000 with status Rolled back and message: Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok.
   2022-12-06T13:28:41.45+0000 [APP/TASK/deploy/0] OUT Processing revoke files...
   2022-12-06T13:28:41.45+0000 [APP/TASK/deploy/0] OUT Processing revoke files... ok (0s 0ms)
   2022-12-06T13:28:41.45+0000 [APP/TASK/deploy/0] OUT Processing grants files...
   2022-12-06T13:28:41.45+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"...
   2022-12-06T13:28:41.45+0000 [APP/TASK/deploy/0] OUT Using grantor service "repoiodb_grantor" of type "hdi"
   2022-12-06T13:28:41.99+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"... ok
   2022-12-06T13:28:41.99+0000 [APP/TASK/deploy/0] OUT Processing grants files... ok (0s 544ms)
   2022-12-06T13:28:42.00+0000 [APP/TASK/deploy/0] OUT Preprocessing files...
   2022-12-06T13:28:42.00+0000 [APP/TASK/deploy/0] OUT Preprocessing files... ok (0s 0ms)
   2022-12-06T13:28:42.00+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"...
   2022-12-06T13:28:42.17+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"... ok (0s 169ms)
   2022-12-06T13:28:42.17+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"...
   2022-12-06T13:28:42.43+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"... ok (0s 266ms)
   2022-12-06T13:28:42.43+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"...
   2022-12-06T13:28:42.43+0000 [APP/TASK/deploy/0] OUT Deleting files...
   2022-12-06T13:28:42.62+0000 [APP/TASK/deploy/0] OUT Deleting files... ok
   2022-12-06T13:28:42.62+0000 [APP/TASK/deploy/0] OUT Writing files...
   2022-12-06T13:28:42.86+0000 [APP/TASK/deploy/0] OUT Writing files... ok
   2022-12-06T13:28:42.86+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"... ok (0s 433ms)
   2022-12-06T13:28:43.04+0000 [APP/TASK/deploy/0] OUT added files: []
   2022-12-06T13:28:43.04+0000 [APP/TASK/deploy/0] OUT modified files: []
   2022-12-06T13:28:43.04+0000 [APP/TASK/deploy/0] OUT deleted files: []
   2022-12-06T13:28:43.04+0000 [APP/TASK/deploy/0] OUT 0 modified or added files are scheduled for deploy based on delta detection
   2022-12-06T13:28:43.04+0000 [APP/TASK/deploy/0] OUT 0 deleted files are scheduled for undeploy based on delta detection (filtered by undeploy allowlist)
   2022-12-06T13:28:43.04+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for deploy based on explicit specification
   2022-12-06T13:28:43.04+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for undeploy based on explicit specification
   2022-12-06T13:28:43.04+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"...
   2022-12-06T13:28:43.28+0000 [APP/TASK/deploy/0] OUT Polling messages for request id: 321
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy...
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"...
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"... ok  (0s 9ms)
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Migrating libraries...
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Migrating libraries... ok  (0s 8ms)
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Making...
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Preparing...
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Preparing... ok  (0s 0ms)
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT No make necessary
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Making... ok  (0s 39ms)
   2022-12-06T13:28:43.29+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"...
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"... ok  (0s 14ms)
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok  (0s 75ms)
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"... ok (0s 289ms)
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT No default-access-role handling needed; global role "PICKUP::access_role" will not be adapted
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"...
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"... ok (0s 0ms)
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT Deployment to container PICKUP done [Deployment ID: none].
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT Deployment ended at 2022-12-06 13:28:43
   2022-12-06T13:28:43.33+0000 [APP/TASK/deploy/0] OUT (4s 191ms)
   2022-12-06T13:28:43.44+0000 [APP/TASK/deploy/0] OUT -- task map_hdi_schemas v0.1.0 --
   2022-12-06T13:28:43.44+0000 [APP/TASK/deploy/0] OUT ---------------------------------
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR node:internal/modules/cjs/loader:959
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR throw err;
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR ^
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR Error: Cannot find module '@sap/xsenv'
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR Require stack:
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR - /home/vcap/app/tasks/map_hdi_schemas.js
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Function.Module._resolveFilename (node:internal/modules/cjs/loader:956:15)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Function.Module._load (node:internal/modules/cjs/loader:804:27)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Module.require (node:internal/modules/cjs/loader:1028:19)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at require (node:internal/modules/cjs/helpers:102:18)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Object.<anonymous> (/home/vcap/app/tasks/map_hdi_schemas.js:7:15)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Module._compile (node:internal/modules/cjs/loader:1126:14)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Module.load (node:internal/modules/cjs/loader:1004:32)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Function.Module._load (node:internal/modules/cjs/loader:839:12)
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR code: 'MODULE_NOT_FOUND',
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR requireStack: [ '/home/vcap/app/tasks/map_hdi_schemas.js' ]
   2022-12-06T13:28:43.46+0000 [APP/TASK/deploy/0] ERR }
   2022-12-06T13:28:43.54+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:28:43.54+0000 [APP/TASK/deploy/0] ERR npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-06T13:28:43.54+0000 [APP/TASK/deploy/0] ERR npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-06T13:28:43.54+0000 [APP/TASK/deploy/0] ERR npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-06T13:28:43.54+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:28:43.55+0000 [APP/TASK/deploy/0] OUT Exit status 1
   2022-12-06T13:28:43.88+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f stopping instance c23524d6-97eb-4640-a2b4-65ad0132a675
   2022-12-06T13:28:43.88+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f destroying container for instance c23524d6-97eb-4640-a2b4-65ad0132a675
   2022-12-06T13:28:45.40+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully destroyed container for instance c23524d6-97eb-4640-a2b4-65ad0132a675
   2022-12-06T13:28:49.45+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f creating container for instance f6ffe4ff-a95d-40c8-aaa9-bf37b93af5cd
   2022-12-06T13:28:49.77+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully created container for instance f6ffe4ff-a95d-40c8-aaa9-bf37b93af5cd
   2022-12-06T13:28:58.15+0000 [APP/TASK/deploy/0] OUT > start
   2022-12-06T13:28:58.15+0000 [APP/TASK/deploy/0] OUT > node node_modules/@sap/hdi-deploy/deploy.js --exit && node tasks/map_hdi_schemas.js
   2022-12-06T13:29:00.07+0000 [APP/TASK/deploy/0] OUT @sap/hdi-deploy, version 4.5.1 (mode default), server version 4.00.000.00.1668498444 (4.0.0.0), node version 16.17.1, HDI version 1009, container API version 1004
   2022-12-06T13:29:00.07+0000 [APP/TASK/deploy/0] OUT Deployment started at 2022-12-06 13:29:00
   2022-12-06T13:29:00.07+0000 [APP/TASK/deploy/0] OUT Using hana-client for connection
   2022-12-06T13:29:00.07+0000 [APP/TASK/deploy/0] OUT Using service replacements from environment variable "SERVICE_REPLACEMENTS" with 1 replacements
   2022-12-06T13:29:00.16+0000 [APP/TASK/deploy/0] OUT No ignore file at /home/vcap/app/.hdiignore.
   2022-12-06T13:29:00.16+0000 [APP/TASK/deploy/0] OUT Collecting files...
   2022-12-06T13:29:00.24+0000 [APP/TASK/deploy/0] OUT Collecting files... ok (0s 85ms)
   2022-12-06T13:29:00.24+0000 [APP/TASK/deploy/0] OUT 4 directories collected
   2022-12-06T13:29:00.24+0000 [APP/TASK/deploy/0] OUT 14 files collected
   2022-12-06T13:29:00.24+0000 [APP/TASK/deploy/0] OUT 0 reusable modules collected
   2022-12-06T13:29:00.24+0000 [APP/TASK/deploy/0] OUT Target service: pickup_hdi
   2022-12-06T13:29:00.48+0000 [APP/TASK/deploy/0] OUT Session variable APPLICATION is set to "SAP_HDI/dev/9a4c047ftrial".
   2022-12-06T13:29:00.70+0000 [APP/TASK/deploy/0] OUT Previous build with request ID 321 finished at 2022-12-06 13:28:43.286036000 with status Rolled back and message: Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok.
   2022-12-06T13:29:00.70+0000 [APP/TASK/deploy/0] OUT Processing revoke files...
   2022-12-06T13:29:00.70+0000 [APP/TASK/deploy/0] OUT Processing revoke files... ok (0s 0ms)
   2022-12-06T13:29:00.70+0000 [APP/TASK/deploy/0] OUT Processing grants files...
   2022-12-06T13:29:00.70+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"...
   2022-12-06T13:29:00.70+0000 [APP/TASK/deploy/0] OUT Using grantor service "repoiodb_grantor" of type "hdi"
   2022-12-06T13:29:01.25+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"... ok
   2022-12-06T13:29:01.25+0000 [APP/TASK/deploy/0] OUT Processing grants files... ok (0s 552ms)
   2022-12-06T13:29:01.25+0000 [APP/TASK/deploy/0] OUT Preprocessing files...
   2022-12-06T13:29:01.25+0000 [APP/TASK/deploy/0] OUT Preprocessing files... ok (0s 0ms)
   2022-12-06T13:29:01.25+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"...
   2022-12-06T13:29:01.47+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"... ok (0s 212ms)
   2022-12-06T13:29:01.47+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"...
   2022-12-06T13:29:01.73+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"... ok (0s 267ms)
   2022-12-06T13:29:01.73+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"...
   2022-12-06T13:29:01.73+0000 [APP/TASK/deploy/0] OUT Deleting files...
   2022-12-06T13:29:01.92+0000 [APP/TASK/deploy/0] OUT Deleting files... ok
   2022-12-06T13:29:01.92+0000 [APP/TASK/deploy/0] OUT Writing files...
   2022-12-06T13:29:02.18+0000 [APP/TASK/deploy/0] OUT Writing files... ok
   2022-12-06T13:29:02.18+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"... ok (0s 448ms)
   2022-12-06T13:29:02.35+0000 [APP/TASK/deploy/0] OUT added files: []
   2022-12-06T13:29:02.35+0000 [APP/TASK/deploy/0] OUT modified files: []
   2022-12-06T13:29:02.35+0000 [APP/TASK/deploy/0] OUT deleted files: []
   2022-12-06T13:29:02.35+0000 [APP/TASK/deploy/0] OUT 0 modified or added files are scheduled for deploy based on delta detection
   2022-12-06T13:29:02.35+0000 [APP/TASK/deploy/0] OUT 0 deleted files are scheduled for undeploy based on delta detection (filtered by undeploy allowlist)
   2022-12-06T13:29:02.35+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for deploy based on explicit specification
   2022-12-06T13:29:02.35+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for undeploy based on explicit specification
   2022-12-06T13:29:02.35+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"...
   2022-12-06T13:29:02.59+0000 [APP/TASK/deploy/0] OUT Polling messages for request id: 328
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy...
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"...
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"... ok  (0s 9ms)
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Migrating libraries...
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Migrating libraries... ok  (0s 8ms)
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Making...
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Preparing...
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Preparing... ok  (0s 0ms)
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT No make necessary
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Making... ok  (0s 34ms)
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"...
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"... ok  (0s 12ms)
   2022-12-06T13:29:02.60+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok  (0s 68ms)
   2022-12-06T13:29:02.62+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"... ok (0s 264ms)
   2022-12-06T13:29:02.62+0000 [APP/TASK/deploy/0] OUT No default-access-role handling needed; global role "PICKUP::access_role" will not be adapted
   2022-12-06T13:29:02.62+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"...
   2022-12-06T13:29:02.62+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"... ok (0s 0ms)
   2022-12-06T13:29:02.62+0000 [APP/TASK/deploy/0] OUT Deployment to container PICKUP done [Deployment ID: none].
   2022-12-06T13:29:02.62+0000 [APP/TASK/deploy/0] OUT Deployment ended at 2022-12-06 13:29:02
   2022-12-06T13:29:02.62+0000 [APP/TASK/deploy/0] OUT (4s 176ms)
   2022-12-06T13:29:02.74+0000 [APP/TASK/deploy/0] OUT -- task map_hdi_schemas v0.1.0 --
   2022-12-06T13:29:02.74+0000 [APP/TASK/deploy/0] OUT ---------------------------------
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR node:internal/modules/cjs/loader:959
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR throw err;
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR ^
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR Error: Cannot find module '@sap/xsenv'
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR Require stack:
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR - /home/vcap/app/tasks/map_hdi_schemas.js
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Function.Module._resolveFilename (node:internal/modules/cjs/loader:956:15)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Function.Module._load (node:internal/modules/cjs/loader:804:27)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Module.require (node:internal/modules/cjs/loader:1028:19)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at require (node:internal/modules/cjs/helpers:102:18)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Object.<anonymous> (/home/vcap/app/tasks/map_hdi_schemas.js:7:15)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Module._compile (node:internal/modules/cjs/loader:1126:14)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Module.load (node:internal/modules/cjs/loader:1004:32)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Function.Module._load (node:internal/modules/cjs/loader:839:12)
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR code: 'MODULE_NOT_FOUND',
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR requireStack: [ '/home/vcap/app/tasks/map_hdi_schemas.js' ]
   2022-12-06T13:29:02.76+0000 [APP/TASK/deploy/0] ERR }
   2022-12-06T13:29:02.84+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:29:02.84+0000 [APP/TASK/deploy/0] ERR npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-06T13:29:02.84+0000 [APP/TASK/deploy/0] ERR npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-06T13:29:02.84+0000 [APP/TASK/deploy/0] ERR npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-06T13:29:02.84+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:29:02.85+0000 [APP/TASK/deploy/0] OUT Exit status 1
   2022-12-06T13:29:03.06+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f stopping instance f6ffe4ff-a95d-40c8-aaa9-bf37b93af5cd
   2022-12-06T13:29:03.06+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f destroying container for instance f6ffe4ff-a95d-40c8-aaa9-bf37b93af5cd
   2022-12-06T13:29:04.61+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully destroyed container for instance f6ffe4ff-a95d-40c8-aaa9-bf37b93af5cd
   2022-12-06T13:29:11.85+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f creating container for instance 7a158d18-50c4-455c-892d-020334765952
   2022-12-06T13:29:12.20+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully created container for instance 7a158d18-50c4-455c-892d-020334765952
   2022-12-06T13:29:20.75+0000 [APP/TASK/deploy/0] OUT > start
   2022-12-06T13:29:20.75+0000 [APP/TASK/deploy/0] OUT > node node_modules/@sap/hdi-deploy/deploy.js --exit && node tasks/map_hdi_schemas.js
   2022-12-06T13:29:22.67+0000 [APP/TASK/deploy/0] OUT @sap/hdi-deploy, version 4.5.1 (mode default), server version 4.00.000.00.1668498444 (4.0.0.0), node version 16.17.1, HDI version 1009, container API version 1004
   2022-12-06T13:29:22.67+0000 [APP/TASK/deploy/0] OUT Deployment started at 2022-12-06 13:29:22
   2022-12-06T13:29:22.67+0000 [APP/TASK/deploy/0] OUT Using hana-client for connection
   2022-12-06T13:29:22.67+0000 [APP/TASK/deploy/0] OUT Using service replacements from environment variable "SERVICE_REPLACEMENTS" with 1 replacements
   2022-12-06T13:29:22.75+0000 [APP/TASK/deploy/0] OUT No ignore file at /home/vcap/app/.hdiignore.
   2022-12-06T13:29:22.75+0000 [APP/TASK/deploy/0] OUT Collecting files...
   2022-12-06T13:29:22.84+0000 [APP/TASK/deploy/0] OUT Collecting files... ok (0s 89ms)
   2022-12-06T13:29:22.84+0000 [APP/TASK/deploy/0] OUT 4 directories collected
   2022-12-06T13:29:22.84+0000 [APP/TASK/deploy/0] OUT 14 files collected
   2022-12-06T13:29:22.84+0000 [APP/TASK/deploy/0] OUT 0 reusable modules collected
   2022-12-06T13:29:22.84+0000 [APP/TASK/deploy/0] OUT Target service: pickup_hdi
   2022-12-06T13:29:23.08+0000 [APP/TASK/deploy/0] OUT Session variable APPLICATION is set to "SAP_HDI/dev/9a4c047ftrial".
   2022-12-06T13:29:23.30+0000 [APP/TASK/deploy/0] OUT Previous build with request ID 328 finished at 2022-12-06 13:29:02.585885000 with status Rolled back and message: Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok.
   2022-12-06T13:29:23.30+0000 [APP/TASK/deploy/0] OUT Processing revoke files...
   2022-12-06T13:29:23.30+0000 [APP/TASK/deploy/0] OUT Processing revoke files... ok (0s 0ms)
   2022-12-06T13:29:23.30+0000 [APP/TASK/deploy/0] OUT Processing grants files...
   2022-12-06T13:29:23.30+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"...
   2022-12-06T13:29:23.30+0000 [APP/TASK/deploy/0] OUT Using grantor service "repoiodb_grantor" of type "hdi"
   2022-12-06T13:29:23.84+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"... ok
   2022-12-06T13:29:23.84+0000 [APP/TASK/deploy/0] OUT Processing grants files... ok (0s 547ms)
   2022-12-06T13:29:23.84+0000 [APP/TASK/deploy/0] OUT Preprocessing files...
   2022-12-06T13:29:23.85+0000 [APP/TASK/deploy/0] OUT Preprocessing files... ok (0s 0ms)
   2022-12-06T13:29:23.85+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"...
   2022-12-06T13:29:24.07+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"... ok (0s 221ms)
   2022-12-06T13:29:24.07+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"...
   2022-12-06T13:29:24.34+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"... ok (0s 273ms)
   2022-12-06T13:29:24.34+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"...
   2022-12-06T13:29:24.34+0000 [APP/TASK/deploy/0] OUT Deleting files...
   2022-12-06T13:29:24.53+0000 [APP/TASK/deploy/0] OUT Deleting files... ok
   2022-12-06T13:29:24.53+0000 [APP/TASK/deploy/0] OUT Writing files...
   2022-12-06T13:29:24.78+0000 [APP/TASK/deploy/0] OUT Writing files... ok
   2022-12-06T13:29:24.78+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"... ok (0s 440ms)
   2022-12-06T13:29:24.95+0000 [APP/TASK/deploy/0] OUT added files: []
   2022-12-06T13:29:24.95+0000 [APP/TASK/deploy/0] OUT modified files: []
   2022-12-06T13:29:24.95+0000 [APP/TASK/deploy/0] OUT deleted files: []
   2022-12-06T13:29:24.95+0000 [APP/TASK/deploy/0] OUT 0 modified or added files are scheduled for deploy based on delta detection
   2022-12-06T13:29:24.95+0000 [APP/TASK/deploy/0] OUT 0 deleted files are scheduled for undeploy based on delta detection (filtered by undeploy allowlist)
   2022-12-06T13:29:24.95+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for deploy based on explicit specification
   2022-12-06T13:29:24.95+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for undeploy based on explicit specification
   2022-12-06T13:29:24.95+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"...
   2022-12-06T13:29:25.18+0000 [APP/TASK/deploy/0] OUT Polling messages for request id: 335
   2022-12-06T13:29:25.18+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy...
   2022-12-06T13:29:25.18+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"...
   2022-12-06T13:29:25.18+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"... ok  (0s 10ms)
   2022-12-06T13:29:25.18+0000 [APP/TASK/deploy/0] OUT Migrating libraries...
   2022-12-06T13:29:25.18+0000 [APP/TASK/deploy/0] OUT Migrating libraries... ok  (0s 10ms)
   2022-12-06T13:29:25.18+0000 [APP/TASK/deploy/0] OUT Making...
   2022-12-06T13:29:25.25+0000 [APP/TASK/deploy/0] OUT Preparing...
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Preparing... ok  (0s 0ms)
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT No make necessary
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Making... ok  (0s 27ms)
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"...
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"... ok  (0s 13ms)
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok  (0s 66ms)
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"... ok (0s 302ms)
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT No default-access-role handling needed; global role "PICKUP::access_role" will not be adapted
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"...
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"... ok (0s 0ms)
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Deployment to container PICKUP done [Deployment ID: none].
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT Deployment ended at 2022-12-06 13:29:25
   2022-12-06T13:29:25.26+0000 [APP/TASK/deploy/0] OUT (4s 216ms)
   2022-12-06T13:29:25.36+0000 [APP/TASK/deploy/0] OUT -- task map_hdi_schemas v0.1.0 --
   2022-12-06T13:29:25.36+0000 [APP/TASK/deploy/0] OUT ---------------------------------
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR node:internal/modules/cjs/loader:959
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR throw err;
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR ^
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR Error: Cannot find module '@sap/xsenv'
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR Require stack:
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR - /home/vcap/app/tasks/map_hdi_schemas.js
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Function.Module._resolveFilename (node:internal/modules/cjs/loader:956:15)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Function.Module._load (node:internal/modules/cjs/loader:804:27)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Module.require (node:internal/modules/cjs/loader:1028:19)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at require (node:internal/modules/cjs/helpers:102:18)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Object.<anonymous> (/home/vcap/app/tasks/map_hdi_schemas.js:7:15)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Module._compile (node:internal/modules/cjs/loader:1126:14)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Module.load (node:internal/modules/cjs/loader:1004:32)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Function.Module._load (node:internal/modules/cjs/loader:839:12)
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR code: 'MODULE_NOT_FOUND',
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR requireStack: [ '/home/vcap/app/tasks/map_hdi_schemas.js' ]
   2022-12-06T13:29:25.45+0000 [APP/TASK/deploy/0] ERR }
   2022-12-06T13:29:25.46+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:29:25.46+0000 [APP/TASK/deploy/0] ERR npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-06T13:29:25.46+0000 [APP/TASK/deploy/0] ERR npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-06T13:29:25.46+0000 [APP/TASK/deploy/0] ERR npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-06T13:29:25.46+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:29:25.55+0000 [APP/TASK/deploy/0] OUT Exit status 1
   2022-12-06T13:29:25.93+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f stopping instance 7a158d18-50c4-455c-892d-020334765952
   2022-12-06T13:29:25.93+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f destroying container for instance 7a158d18-50c4-455c-892d-020334765952
   2022-12-06T13:29:27.33+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully destroyed container for instance 7a158d18-50c4-455c-892d-020334765952
   2022-12-06T13:52:06.57+0000 [API/11] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"metadata"=>{"annotations"=>{"mta_id"=>"repokraft_pickup", "mta_version"=>"1.2.1", "mta_module"=>"{\"name\":\"pickup_db\"}", "mta_module_provided_dependencies"=>"[]", "mta_bound_services"=>"[\"pickup_hdi\"]"}, "labels"=>{"mta_id"=>"6768c43748626c635da10d7d2518ee65"}}})
   2022-12-06T13:52:06.90+0000 [API/22] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"lifecycle"=>{"data"=>{}, "type"=>"buildpack"}})
   2022-12-06T13:52:07.08+0000 [API/3] OUT Updating process: "web"
   2022-12-06T13:52:28.42+0000 [API/4] OUT Uploading app package for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-06T13:52:28.66+0000 [API/39] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"environment_variables"=>"[PRIVATE DATA HIDDEN]"})
   2022-12-06T13:52:45.77+0000 [API/15] OUT Scaling process: "web"
   2022-12-06T13:52:46.14+0000 [API/6] OUT Creating build for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-06T13:52:46.93+0000 [STG/0] OUT Downloading sap_java_buildpack_1_59...
   2022-12-06T13:52:46.93+0000 [STG/0] OUT Downloading python_buildpack...
   2022-12-06T13:52:46.93+0000 [STG/0] OUT Downloading binary_buildpack...
   2022-12-06T13:52:46.93+0000 [STG/0] OUT Downloading ruby_buildpack...
   2022-12-06T13:52:46.93+0000 [STG/0] OUT Downloading nodejs_buildpack...
   2022-12-06T13:52:46.97+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_59
   2022-12-06T13:52:46.97+0000 [STG/0] OUT Downloading nginx_buildpack...
   2022-12-06T13:52:46.97+0000 [STG/0] OUT Downloaded binary_buildpack
   2022-12-06T13:52:46.97+0000 [STG/0] OUT Downloading php_buildpack...
   2022-12-06T13:52:46.98+0000 [STG/0] OUT Downloaded ruby_buildpack
   2022-12-06T13:52:46.98+0000 [STG/0] OUT Downloading staticfile_buildpack...
   2022-12-06T13:52:46.98+0000 [STG/0] OUT Downloaded python_buildpack
   2022-12-06T13:52:46.98+0000 [STG/0] OUT Downloaded php_buildpack
   2022-12-06T13:52:46.98+0000 [STG/0] OUT Downloading r_buildpack...
   2022-12-06T13:52:46.99+0000 [STG/0] OUT Downloading java_buildpack...
   2022-12-06T13:52:47.01+0000 [STG/0] OUT Downloaded nginx_buildpack
   2022-12-06T13:52:47.01+0000 [STG/0] OUT Downloading sap_java_buildpack_1_63...
   2022-12-06T13:52:47.01+0000 [STG/0] OUT Downloaded nodejs_buildpack
   2022-12-06T13:52:47.01+0000 [STG/0] OUT Downloading dotnet_core_buildpack...
   2022-12-06T13:52:47.02+0000 [STG/0] OUT Downloaded r_buildpack
   2022-12-06T13:52:47.02+0000 [STG/0] OUT Downloading sap_java_buildpack...
   2022-12-06T13:52:47.02+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_63
   2022-12-06T13:52:47.02+0000 [STG/0] OUT Downloading go_buildpack...
   2022-12-06T13:52:47.02+0000 [STG/0] OUT Downloaded staticfile_buildpack
   2022-12-06T13:52:47.02+0000 [STG/0] OUT Downloading sap_java_buildpack_1_60...
   2022-12-06T13:52:47.02+0000 [STG/0] OUT Downloaded dotnet_core_buildpack
   2022-12-06T13:52:47.03+0000 [STG/0] OUT Downloaded java_buildpack
   2022-12-06T13:52:47.04+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_60
   2022-12-06T13:52:47.04+0000 [STG/0] OUT Downloaded sap_java_buildpack
   2022-12-06T13:52:47.05+0000 [STG/0] OUT Downloaded go_buildpack
   2022-12-06T13:52:47.05+0000 [STG/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f creating container for instance 702d7908-03c0-4086-b7a1-2b70682f5b29
   2022-12-06T13:52:47.38+0000 [STG/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully created container for instance 702d7908-03c0-4086-b7a1-2b70682f5b29
   2022-12-06T13:52:47.81+0000 [STG/0] OUT Downloading build artifacts cache...
   2022-12-06T13:52:47.81+0000 [STG/0] OUT Downloading app package...
   2022-12-06T13:52:47.88+0000 [STG/0] OUT Downloaded build artifacts cache (224B)
   2022-12-06T13:52:52.20+0000 [STG/0] OUT Downloaded app package (118.7M)
   2022-12-06T13:52:52.73+0000 [STG/0] OUT -----> Nodejs Buildpack version 1.8.1
   2022-12-06T13:52:53.45+0000 [STG/0] OUT -----> Installing binaries
   2022-12-06T13:52:53.45+0000 [STG/0] OUT engines.node (package.json): ^16
   2022-12-06T13:52:53.45+0000 [STG/0] OUT engines.npm (package.json): unspecified (use default)
   2022-12-06T13:52:53.45+0000 [STG/0] OUT -----> Installing node 16.17.1
   2022-12-06T13:52:53.45+0000 [STG/0] OUT Copy [/tmp/buildpacks/3118e939268fccf3a3ade4df9e465176/dependencies/33da2d39aed1341b8fa53e663d60b54c/node_16.17.1_linux_x64_cflinuxfs3_c74713ec.tgz]
   2022-12-06T13:52:54.83+0000 [STG/0] OUT Using default npm version: 8.15.0
   2022-12-06T13:52:54.83+0000 [STG/0] OUT -----> Installing yarn 1.22.19
   2022-12-06T13:52:54.83+0000 [STG/0] OUT Copy [/tmp/buildpacks/3118e939268fccf3a3ade4df9e465176/dependencies/0f06052381cbcef1593bd279ca3d9458/yarn_1.22.19_linux_noarch_any-stack_32d0e82e.tgz]
   2022-12-06T13:52:55.14+0000 [STG/0] OUT Installed yarn 1.22.19
   2022-12-06T13:52:55.14+0000 [STG/0] OUT -----> Creating runtime environment
   2022-12-06T13:52:55.14+0000 [STG/0] OUT NODE_ENV=production
   2022-12-06T13:52:55.14+0000 [STG/0] OUT NODE_HOME=/tmp/contents1451085422/deps/0/node
   2022-12-06T13:52:55.14+0000 [STG/0] OUT NODE_MODULES_CACHE=true
   2022-12-06T13:52:55.14+0000 [STG/0] OUT NODE_VERBOSE=false
   2022-12-06T13:52:55.14+0000 [STG/0] OUT NPM_CONFIG_LOGLEVEL=error
   2022-12-06T13:52:55.14+0000 [STG/0] OUT NPM_CONFIG_PRODUCTION=true
   2022-12-06T13:52:55.14+0000 [STG/0] OUT -----> Building dependencies
   2022-12-06T13:52:55.14+0000 [STG/0] OUT Prebuild detected (node_modules already exists)
   2022-12-06T13:52:55.14+0000 [STG/0] OUT Rebuilding any native modules
   2022-12-06T13:52:55.68+0000 [STG/0] OUT rebuilt dependencies successfully
   2022-12-06T13:52:55.68+0000 [STG/0] OUT npm notice
   2022-12-06T13:52:55.68+0000 [STG/0] OUT npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-06T13:52:55.68+0000 [STG/0] OUT npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-06T13:52:55.68+0000 [STG/0] OUT npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-06T13:52:55.68+0000 [STG/0] OUT npm notice
   2022-12-06T13:52:55.69+0000 [STG/0] OUT Installing any new modules (package.json + package-lock.json)
   2022-12-06T13:52:56.15+0000 [STG/0] OUT up to date in 200ms
   2022-12-06T13:52:57.25+0000 [STG/0] OUT Contrast Security no credentials found. Will not write environment files.
   2022-12-06T13:52:57.25+0000 [STG/0] OUT inside Sealights hook
   2022-12-06T13:52:57.25+0000 [STG/0] OUT service is not configured to run with Sealights
   2022-12-06T13:53:18.56+0000 [STG/0] OUT Exit status 0
   2022-12-06T13:53:18.56+0000 [STG/0] OUT Uploading droplet, build artifacts cache...
   2022-12-06T13:53:18.56+0000 [STG/0] OUT Uploading build artifacts cache...
   2022-12-06T13:53:18.56+0000 [STG/0] OUT Uploading droplet...
   2022-12-06T13:53:18.58+0000 [STG/0] OUT Uploaded build artifacts cache (222B)
   2022-12-06T13:53:20.19+0000 [API/18] OUT Creating droplet for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-06T13:53:29.07+0000 [STG/0] OUT Uploaded droplet (150.9M)
   2022-12-06T13:53:29.09+0000 [STG/0] OUT Uploading complete
   2022-12-06T13:53:29.35+0000 [STG/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f stopping instance 702d7908-03c0-4086-b7a1-2b70682f5b29
   2022-12-06T13:53:29.35+0000 [STG/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f destroying container for instance 702d7908-03c0-4086-b7a1-2b70682f5b29
   2022-12-06T13:53:29.75+0000 [STG/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully destroyed container for instance 702d7908-03c0-4086-b7a1-2b70682f5b29
   2022-12-06T13:53:36.07+0000 [API/29] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({:droplet_guid=>"6101717e-7daa-4f5c-92bc-bcf7c8a1c11a"})
   2022-12-06T13:53:36.74+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f creating container for instance 771e9e5f-b7f0-4514-b2f2-6697a74aee5b
   2022-12-06T13:53:37.09+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully created container for instance 771e9e5f-b7f0-4514-b2f2-6697a74aee5b
   2022-12-06T13:53:45.44+0000 [APP/TASK/deploy/0] OUT > start
   2022-12-06T13:53:45.44+0000 [APP/TASK/deploy/0] OUT > node node_modules/@sap/hdi-deploy/deploy.js --exit && node tasks/map_hdi_schemas.js
   2022-12-06T13:53:47.37+0000 [APP/TASK/deploy/0] OUT @sap/hdi-deploy, version 4.5.1 (mode default), server version 4.00.000.00.1668498444 (4.0.0.0), node version 16.17.1, HDI version 1009, container API version 1004
   2022-12-06T13:53:47.37+0000 [APP/TASK/deploy/0] OUT Deployment started at 2022-12-06 13:53:47
   2022-12-06T13:53:47.37+0000 [APP/TASK/deploy/0] OUT Using hana-client for connection
   2022-12-06T13:53:47.37+0000 [APP/TASK/deploy/0] OUT Using service replacements from environment variable "SERVICE_REPLACEMENTS" with 1 replacements
   2022-12-06T13:53:47.54+0000 [APP/TASK/deploy/0] OUT No ignore file at /home/vcap/app/.hdiignore.
   2022-12-06T13:53:47.54+0000 [APP/TASK/deploy/0] OUT Collecting files...
   2022-12-06T13:53:47.54+0000 [APP/TASK/deploy/0] OUT Collecting files... ok (0s 4ms)
   2022-12-06T13:53:47.54+0000 [APP/TASK/deploy/0] OUT 4 directories collected
   2022-12-06T13:53:47.54+0000 [APP/TASK/deploy/0] OUT 14 files collected
   2022-12-06T13:53:47.54+0000 [APP/TASK/deploy/0] OUT 0 reusable modules collected
   2022-12-06T13:53:47.54+0000 [APP/TASK/deploy/0] OUT Target service: pickup_hdi
   2022-12-06T13:53:47.82+0000 [APP/TASK/deploy/0] OUT Session variable APPLICATION is set to "SAP_HDI/dev/9a4c047ftrial".
   2022-12-06T13:53:48.04+0000 [APP/TASK/deploy/0] OUT Previous build with request ID 335 finished at 2022-12-06 13:29:25.217897000 with status Rolled back and message: Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok.
   2022-12-06T13:53:48.04+0000 [APP/TASK/deploy/0] OUT Processing revoke files...
   2022-12-06T13:53:48.04+0000 [APP/TASK/deploy/0] OUT Processing revoke files... ok (0s 0ms)
   2022-12-06T13:53:48.04+0000 [APP/TASK/deploy/0] OUT Processing grants files...
   2022-12-06T13:53:48.04+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"...
   2022-12-06T13:53:48.05+0000 [APP/TASK/deploy/0] OUT Using grantor service "repoiodb_grantor" of type "hdi"
   2022-12-06T13:53:48.75+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"... ok
   2022-12-06T13:53:48.75+0000 [APP/TASK/deploy/0] OUT Processing grants files... ok (0s 708ms)
   2022-12-06T13:53:48.75+0000 [APP/TASK/deploy/0] OUT Preprocessing files...
   2022-12-06T13:53:48.75+0000 [APP/TASK/deploy/0] OUT Preprocessing files... ok (0s 0ms)
   2022-12-06T13:53:48.75+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"...
   2022-12-06T13:53:48.97+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"... ok (0s 212ms)
   2022-12-06T13:53:48.97+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"...
   2022-12-06T13:53:49.37+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"... ok (0s 408ms)
   2022-12-06T13:53:49.37+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"...
   2022-12-06T13:53:49.37+0000 [APP/TASK/deploy/0] OUT Deleting files...
   2022-12-06T13:53:49.57+0000 [APP/TASK/deploy/0] OUT Deleting files... ok
   2022-12-06T13:53:49.57+0000 [APP/TASK/deploy/0] OUT Writing files...
   2022-12-06T13:53:49.81+0000 [APP/TASK/deploy/0] OUT Writing files... ok
   2022-12-06T13:53:49.81+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"... ok (0s 438ms)
   2022-12-06T13:53:49.98+0000 [APP/TASK/deploy/0] OUT added files: []
   2022-12-06T13:53:49.98+0000 [APP/TASK/deploy/0] OUT modified files: []
   2022-12-06T13:53:49.98+0000 [APP/TASK/deploy/0] OUT deleted files: []
   2022-12-06T13:53:49.99+0000 [APP/TASK/deploy/0] OUT 0 modified or added files are scheduled for deploy based on delta detection
   2022-12-06T13:53:49.99+0000 [APP/TASK/deploy/0] OUT 0 deleted files are scheduled for undeploy based on delta detection (filtered by undeploy allowlist)
   2022-12-06T13:53:49.99+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for deploy based on explicit specification
   2022-12-06T13:53:49.99+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for undeploy based on explicit specification
   2022-12-06T13:53:49.99+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"...
   2022-12-06T13:53:50.20+0000 [APP/TASK/deploy/0] OUT Polling messages for request id: 344
   2022-12-06T13:53:50.21+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy...
   2022-12-06T13:53:50.21+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"...
   2022-12-06T13:53:50.21+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"... ok  (0s 10ms)
   2022-12-06T13:53:50.21+0000 [APP/TASK/deploy/0] OUT Migrating libraries...
   2022-12-06T13:53:50.21+0000 [APP/TASK/deploy/0] OUT Migrating libraries... ok  (0s 9ms)
   2022-12-06T13:53:50.21+0000 [APP/TASK/deploy/0] OUT Making...
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Preparing...
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Preparing... ok  (0s 0ms)
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT No make necessary
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Making... ok  (0s 24ms)
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"...
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"... ok  (0s 11ms)
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 0 files to deploy, 0 files to undeploy... ok  (0s 60ms)
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"... ok (0s 282ms)
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT No default-access-role handling needed; global role "PICKUP::access_role" will not be adapted
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"...
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"... ok (0s 0ms)
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Deployment to container PICKUP done [Deployment ID: none].
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT Deployment ended at 2022-12-06 13:53:50
   2022-12-06T13:53:50.27+0000 [APP/TASK/deploy/0] OUT (4s 428ms)
   2022-12-06T13:53:50.36+0000 [APP/TASK/deploy/0] OUT -- task map_hdi_schemas v0.1.0 --
   2022-12-06T13:53:50.36+0000 [APP/TASK/deploy/0] OUT ---------------------------------
   2022-12-06T13:53:50.55+0000 [APP/TASK/deploy/0] OUT TARGET_CONTAINER: pickup_hdi
   2022-12-06T13:53:50.78+0000 [APP/TASK/deploy/0] OUT repoiodb_mtar Schema: EC8E0C40ADD14DB4A851D7C6726C9140
   2022-12-06T13:53:50.98+0000 [APP/TASK/deploy/0] OUT pickup_hdi Schema: PICKUP
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] OUT ┌─────────┬─────────────────┬────────┬─────────────────┬───────────────────────────────┬──────────────┬────────────────────────────────────┐
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] OUT │ (index) │      NAME       │  TYPE  │  INSTANCE_NAME  │         RESOURCE_NAME         │     PLAN     │               SCHEMA               │
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] OUT ├─────────┼─────────────────┼────────┼─────────────────┼───────────────────────────────┼──────────────┼────────────────────────────────────┤
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] OUT │    0    │ 'repoiodb_mtar' │ 'hana' │ 'repoiodb_mtar' │ '2022-12-06 13:53:50.9820000' │ 'hdi-shared' │ 'EC8E0C40ADD14DB4A851D7C6726C9140' │
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] OUT │    1    │  'pickup_hdi'   │ 'hana' │  'pickup_hdi'   │ '2022-12-06 13:53:51.1810000' │ 'hdi-shared' │              'PICKUP'              │
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] OUT └─────────┴─────────────────┴────────┴─────────────────┴───────────────────────────────┴──────────────┴────────────────────────────────────┘
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] OUT FERTIG
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] ERR npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] ERR npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] ERR npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-06T13:53:51.39+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-06T13:53:51.45+0000 [APP/TASK/deploy/0] OUT Exit status 0
   2022-12-06T13:53:51.87+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f stopping instance 771e9e5f-b7f0-4514-b2f2-6697a74aee5b
   2022-12-06T13:53:51.87+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f destroying container for instance 771e9e5f-b7f0-4514-b2f2-6697a74aee5b
   2022-12-06T13:53:52.71+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully destroyed container for instance 771e9e5f-b7f0-4514-b2f2-6697a74aee5b

```