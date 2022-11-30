# Log - Deploy MTAR and download logs of mtar deployment

[Back to Change Log](../CHANGELOG.md)

## Deployment of MTAR via SAP BAS

```shell
via right-click mta_archives/repokraft_pickup_1.0.0.mtar and select "Deploy MTA Archiv")
```

Output
```shell
Deploying multi-target app archive /home/user/projects/pickup/mta_archives/repokraft_pickup_1.0.0.mtar in org 9a4c047ftrial / space dev as hp+blue@hanadevs.de...

Uploading 1 files...
  /home/user/projects/pickup/mta_archives/repokraft_pickup_1.0.0.mtar
OK
Operation ID: 0d5426cb-7095-11ed-82a3-eeee0a80f227
Operation ID: 0d5426cb-7095-11ed-82a3-eeee0a80f227
Deploying in org "9a4c047ftrial" and space "dev"
Detected MTA schema version: "3"
No deployed MTA detected - this is initial deployment of MTA with ID "repokraft_pickup"
Detected new MTA version: "1.0.0"
Processing service "pickup_hdi"...
Creating service "pickup_hdi" from MTA resource "pickup_hdi"...
0 of 1 done, (1 creating)
0 of 1 done, (1 creating)
0 of 1 done, (1 creating)
0 of 1 done, (1 creating)
0 of 1 done, (1 creating)
0 of 1 done, (1 creating)
1 of 1 done
Creating application "pickup_db" from MTA module "pickup_db"...
Binding service instance "pickup_hdi" to application "pickup_db"...
Binding service instance "repoiodb_mtar" to application "pickup_db"...
Uploading application "pickup_db"...
Started async upload of application "pickup_db"
Staging application "pickup_db"...
Application "pickup_db" staged
Executing task "deploy" on application "pickup_db"...
Skipping deletion of services, because the command line option "--delete-services" is not specified.
Process finished.
Use "cf dmol -i 0d5426cb-7095-11ed-82a3-eeee0a80f227" to download the logs of the process.
 *  Terminal will be reused by tasks, press any key to close it. 
```

## Download Logs from pickup_db app

```shell
cf logs pickup_db --recent > db-deployment-log.txt
```

```shell
Retrieving logs for app pickup_db in org 9a4c047ftrial / space dev as hp+blue@hanadevs.de...

   2022-11-30T09:56:23.26+0000 [API/18] OUT Added process: "web"
   2022-11-30T09:56:23.29+0000 [API/18] OUT Created app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-11-30T09:56:23.44+0000 [API/23] OUT Updating process: "web"
   2022-11-30T09:56:23.56+0000 [API/13] OUT Scaling process: "web"
   2022-11-30T09:56:23.73+0000 [API/23] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"environment_variables"=>"[PRIVATE DATA HIDDEN]"})
   2022-11-30T09:56:31.41+0000 [API/27] OUT Uploading app package for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-11-30T09:56:31.63+0000 [API/15] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"environment_variables"=>"[PRIVATE DATA HIDDEN]"})
   2022-11-30T09:56:42.72+0000 [API/10] OUT Creating build for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-11-30T09:56:43.61+0000 [STG/0] OUT Downloading sap_java_buildpack_1_57...
   2022-11-30T09:56:43.61+0000 [STG/0] OUT Downloading python_buildpack...
   2022-11-30T09:56:43.61+0000 [STG/0] OUT Downloading binary_buildpack...
   2022-11-30T09:56:43.61+0000 [STG/0] OUT Downloading sap_java_buildpack_1_60...
   2022-11-30T09:56:43.61+0000 [STG/0] OUT Downloading sap_java_buildpack_1_59...
   2022-11-30T09:56:43.64+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_60
   2022-11-30T09:56:43.64+0000 [STG/0] OUT Downloading dotnet_core_buildpack...
   2022-11-30T09:56:43.65+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_59
   2022-11-30T09:56:43.65+0000 [STG/0] OUT Downloading nodejs_buildpack...
   2022-11-30T09:56:43.65+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_57
   2022-11-30T09:56:43.65+0000 [STG/0] OUT Downloading go_buildpack...
   2022-11-30T09:56:43.65+0000 [STG/0] OUT Downloaded python_buildpack
   2022-11-30T09:56:43.65+0000 [STG/0] OUT Downloading staticfile_buildpack...
   2022-11-30T09:56:43.66+0000 [STG/0] OUT Downloaded dotnet_core_buildpack
   2022-11-30T09:56:43.66+0000 [STG/0] OUT Downloading ruby_buildpack...
   2022-11-30T09:56:43.66+0000 [STG/0] OUT Downloaded binary_buildpack
   2022-11-30T09:56:43.67+0000 [STG/0] OUT Downloading java_buildpack...
   2022-11-30T09:56:43.69+0000 [STG/0] OUT Downloaded nodejs_buildpack
   2022-11-30T09:56:43.69+0000 [STG/0] OUT Downloading nginx_buildpack...
   2022-11-30T09:56:43.69+0000 [STG/0] OUT Downloaded staticfile_buildpack
   2022-11-30T09:56:43.69+0000 [STG/0] OUT Downloading sap_java_buildpack...
   2022-11-30T09:56:43.69+0000 [STG/0] OUT Downloaded go_buildpack
   2022-11-30T09:56:43.69+0000 [STG/0] OUT Downloading php_buildpack...
   2022-11-30T09:56:43.70+0000 [STG/0] OUT Downloaded java_buildpack
   2022-11-30T09:56:43.70+0000 [STG/0] OUT Downloading r_buildpack...
   2022-11-30T09:56:43.71+0000 [STG/0] OUT Downloaded ruby_buildpack
   2022-11-30T09:56:43.71+0000 [STG/0] OUT Downloaded r_buildpack
   2022-11-30T09:56:43.73+0000 [STG/0] OUT Downloaded sap_java_buildpack
   2022-11-30T09:56:43.73+0000 [STG/0] OUT Downloaded nginx_buildpack
   2022-11-30T09:56:43.74+0000 [STG/0] OUT Downloaded php_buildpack
   2022-11-30T09:56:43.74+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 creating container for instance f1ea956a-80f1-4b66-811e-c1841f7b2c70
   2022-11-30T09:56:44.04+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 successfully created container for instance f1ea956a-80f1-4b66-811e-c1841f7b2c70
   2022-11-30T09:56:44.59+0000 [STG/0] OUT Downloading app package...
   2022-11-30T09:56:46.84+0000 [STG/0] OUT Downloaded app package (60.4M)
   2022-11-30T09:56:47.34+0000 [STG/0] OUT -----> Nodejs Buildpack version 1.8.0
   2022-11-30T09:56:47.74+0000 [STG/0] OUT -----> Installing binaries
   2022-11-30T09:56:47.74+0000 [STG/0] OUT engines.node (package.json): ^16
   2022-11-30T09:56:47.74+0000 [STG/0] OUT engines.npm (package.json): unspecified (use default)
   2022-11-30T09:56:47.74+0000 [STG/0] OUT -----> Installing node 16.17.0
   2022-11-30T09:56:47.74+0000 [STG/0] OUT Copy [/tmp/buildpacks/add1109bf43d98cb8464a0d409522369/dependencies/ed71407b9c40b957554783e91664163f/node_16.17.0_linux_x64_cflinuxfs3_d92abdd8.tgz]
   2022-11-30T09:56:49.13+0000 [STG/0] OUT Using default npm version: 8.15.0
   2022-11-30T09:56:49.13+0000 [STG/0] OUT -----> Installing yarn 1.22.19
   2022-11-30T09:56:49.13+0000 [STG/0] OUT Copy [/tmp/buildpacks/add1109bf43d98cb8464a0d409522369/dependencies/0f06052381cbcef1593bd279ca3d9458/yarn_1.22.19_linux_noarch_any-stack_32d0e82e.tgz]
   2022-11-30T09:56:49.44+0000 [STG/0] OUT Installed yarn 1.22.19
   2022-11-30T09:56:49.44+0000 [STG/0] OUT -----> Creating runtime environment
   2022-11-30T09:56:49.44+0000 [STG/0] OUT NODE_ENV=production
   2022-11-30T09:56:49.44+0000 [STG/0] OUT NODE_HOME=/tmp/contents2008183090/deps/0/node
   2022-11-30T09:56:49.44+0000 [STG/0] OUT NODE_MODULES_CACHE=true
   2022-11-30T09:56:49.44+0000 [STG/0] OUT NODE_VERBOSE=false
   2022-11-30T09:56:49.44+0000 [STG/0] OUT NPM_CONFIG_LOGLEVEL=error
   2022-11-30T09:56:49.44+0000 [STG/0] OUT NPM_CONFIG_PRODUCTION=true
   2022-11-30T09:56:49.44+0000 [STG/0] OUT -----> Building dependencies
   2022-11-30T09:56:49.44+0000 [STG/0] OUT Prebuild detected (node_modules already exists)
   2022-11-30T09:56:49.44+0000 [STG/0] OUT Rebuilding any native modules
   2022-11-30T09:56:50.04+0000 [STG/0] OUT rebuilt dependencies successfully
   2022-11-30T09:56:50.04+0000 [STG/0] OUT npm notice
   2022-11-30T09:56:50.04+0000 [STG/0] OUT npm notice New major version of npm available! 8.15.0 -> 9.1.2
   2022-11-30T09:56:50.04+0000 [STG/0] OUT npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.2>
   2022-11-30T09:56:50.04+0000 [STG/0] OUT npm notice Run `npm install -g npm@9.1.2` to update!
   2022-11-30T09:56:50.04+0000 [STG/0] OUT npm notice
   2022-11-30T09:56:50.05+0000 [STG/0] OUT Installing any new modules (package.json + package-lock.json)
   2022-11-30T09:56:50.47+0000 [STG/0] OUT up to date in 165ms
   2022-11-30T09:56:51.22+0000 [STG/0] OUT Contrast Security no credentials found. Will not write environment files.
   2022-11-30T09:56:51.22+0000 [STG/0] OUT inside Sealights hook
   2022-11-30T09:56:51.22+0000 [STG/0] OUT service is not configured to run with Sealights
   2022-11-30T09:57:04.48+0000 [STG/0] OUT Exit status 0
   2022-11-30T09:57:04.48+0000 [STG/0] OUT Uploading droplet, build artifacts cache...
   2022-11-30T09:57:04.48+0000 [STG/0] OUT Uploading droplet...
   2022-11-30T09:57:04.48+0000 [STG/0] OUT Uploading build artifacts cache...
   2022-11-30T09:57:04.52+0000 [STG/0] OUT Uploaded build artifacts cache (216B)
   2022-11-30T09:57:05.27+0000 [API/23] OUT Creating droplet for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-11-30T09:57:09.82+0000 [STG/0] OUT Uploaded droplet (93.7M)
   2022-11-30T09:57:09.84+0000 [STG/0] OUT Uploading complete
   2022-11-30T09:57:10.14+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 stopping instance f1ea956a-80f1-4b66-811e-c1841f7b2c70
   2022-11-30T09:57:10.14+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 destroying container for instance f1ea956a-80f1-4b66-811e-c1841f7b2c70
   2022-11-30T09:57:10.78+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 successfully destroyed container for instance f1ea956a-80f1-4b66-811e-c1841f7b2c70
   2022-11-30T09:57:16.29+0000 [API/6] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({:droplet_guid=>"a47ec770-c614-4dee-94c2-fa9d8ae521b3"})
   2022-11-30T09:57:16.92+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f creating container for instance f0af81da-07fd-43b8-8eb6-48cc1212637c
   2022-11-30T09:57:17.26+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully created container for instance f0af81da-07fd-43b8-8eb6-48cc1212637c
   2022-11-30T09:57:23.37+0000 [APP/TASK/deploy/0] OUT > start
   2022-11-30T09:57:23.37+0000 [APP/TASK/deploy/0] OUT > node node_modules/@sap/hdi-deploy/deploy.js
   2022-11-30T09:57:25.31+0000 [APP/TASK/deploy/0] OUT @sap/hdi-deploy, version 4.5.1 (mode default), server version 4.00.000.00.1668498444 (4.0.0.0), node version 16.17.0, HDI version 1009, container API version 1004
   2022-11-30T09:57:25.31+0000 [APP/TASK/deploy/0] OUT Deployment started at 2022-11-30 09:57:25
   2022-11-30T09:57:25.31+0000 [APP/TASK/deploy/0] OUT Using hana-client for connection
   2022-11-30T09:57:25.31+0000 [APP/TASK/deploy/0] OUT Using default environment variables from file ".env"
   2022-11-30T09:57:25.31+0000 [APP/TASK/deploy/0] OUT Using service replacements from environment variable "SERVICE_REPLACEMENTS" with 1 replacements
   2022-11-30T09:57:25.47+0000 [APP/TASK/deploy/0] OUT No ignore file at /home/vcap/app/.hdiignore.
   2022-11-30T09:57:25.47+0000 [APP/TASK/deploy/0] OUT Collecting files...
   2022-11-30T09:57:25.47+0000 [APP/TASK/deploy/0] OUT Collecting files... ok (0s 3ms)
   2022-11-30T09:57:25.47+0000 [APP/TASK/deploy/0] OUT 2 directories collected
   2022-11-30T09:57:25.47+0000 [APP/TASK/deploy/0] OUT 9 files collected
   2022-11-30T09:57:25.47+0000 [APP/TASK/deploy/0] OUT 0 reusable modules collected
   2022-11-30T09:57:25.47+0000 [APP/TASK/deploy/0] OUT Target service: pickup_hdi
   2022-11-30T09:57:25.75+0000 [APP/TASK/deploy/0] OUT Session variable APPLICATION is set to "SAP_HDI/dev/9a4c047ftrial".
   2022-11-30T09:57:25.94+0000 [APP/TASK/deploy/0] OUT Could not determine status of last build: Could not find any information about the previous deployment.
   2022-11-30T09:57:25.94+0000 [APP/TASK/deploy/0] OUT Processing revoke files...
   2022-11-30T09:57:25.94+0000 [APP/TASK/deploy/0] OUT Processing revoke files... ok (0s 0ms)
   2022-11-30T09:57:25.94+0000 [APP/TASK/deploy/0] OUT Processing grants files...
   2022-11-30T09:57:25.94+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"...
   2022-11-30T09:57:25.94+0000 [APP/TASK/deploy/0] OUT Using grantor service "repoiodb_grantor" of type "hdi"
   2022-11-30T09:57:26.70+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"... ok
   2022-11-30T09:57:26.70+0000 [APP/TASK/deploy/0] OUT Processing grants files... ok (0s 756ms)
   2022-11-30T09:57:26.70+0000 [APP/TASK/deploy/0] OUT Preprocessing files...
   2022-11-30T09:57:26.70+0000 [APP/TASK/deploy/0] OUT Preprocessing files... ok (0s 0ms)
   2022-11-30T09:57:26.70+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"...
   2022-11-30T09:57:26.89+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"... ok (0s 189ms)
   2022-11-30T09:57:26.89+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"...
   2022-11-30T09:57:27.32+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"... ok (0s 436ms)
   2022-11-30T09:57:27.32+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"...
   2022-11-30T09:57:27.32+0000 [APP/TASK/deploy/0] OUT Deleting files...
   2022-11-30T09:57:27.52+0000 [APP/TASK/deploy/0] OUT Deleting files... ok
   2022-11-30T09:57:27.52+0000 [APP/TASK/deploy/0] OUT Writing files...
   2022-11-30T09:57:27.86+0000 [APP/TASK/deploy/0] OUT Writing files... ok
   2022-11-30T09:57:27.86+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"... ok (0s 533ms)
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT added files: [
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT "cfg/.hdiconfig",
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT "cfg/repoiodb_mtar.hdbsynonymconfig",
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT "src/.hdiconfig",
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT "src/PICKUP_SCHEMA.hdbtable",
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT "src/V_INVOICE_BASE.hdbview",
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT "src/pickup_admin_grant.hdbrole",
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT "src/pickup_consumer.hdbrole",
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT "src/repoiodb_mtar.hdbsynonym"
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT ]
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT modified files: []
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT deleted files: []
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT 8 modified or added files are scheduled for deploy based on delta detection
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT 0 deleted files are scheduled for undeploy based on delta detection (filtered by undeploy allowlist)
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for deploy based on explicit specification
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for undeploy based on explicit specification
   2022-11-30T09:57:28.11+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"...
   2022-11-30T09:57:28.83+0000 [APP/TASK/deploy/0] OUT Polling messages for request id: 172
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 8 files to deploy, 0 files to undeploy...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"... ok  (0s 10ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Migrating libraries...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Migrating libraries... ok  (0s 10ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Making...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Preparing...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Preparing the make transaction...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Preparing the make transaction... ok  (0s 76ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Deploying the configuration file "cfg/.hdiconfig"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Deploying the configuration file "cfg/.hdiconfig"... ok  (0s 60ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Deploying the configuration file "src/.hdiconfig"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Deploying the configuration file "src/.hdiconfig"... ok  (0s 5ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "cfg/repoiodb_mtar.hdbsynonymconfig" for deploy...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "cfg/repoiodb_mtar.hdbsynonymconfig" for deploy... ok  (0s 22ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/PICKUP_SCHEMA.hdbtable" for deploy...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/PICKUP_SCHEMA.hdbtable" for deploy... ok  (0s 1ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/V_INVOICE_BASE.hdbview" for deploy...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/V_INVOICE_BASE.hdbview" for deploy... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/pickup_admin_grant.hdbrole" for deploy...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/pickup_admin_grant.hdbrole" for deploy... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/pickup_consumer.hdbrole" for deploy...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/pickup_consumer.hdbrole" for deploy... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/repoiodb_mtar.hdbsynonym" for deploy...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Adding "src/repoiodb_mtar.hdbsynonym" for deploy... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Preparing... ok  (0s 228ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Calculating dependencies...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanding...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanding "src/PICKUP_SCHEMA.hdbtable"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanding "src/V_INVOICE_BASE.hdbview"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanding "src/repoiodb_mtar.hdbsynonym"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanding "src/repoiodb_mtar.hdbsynonym"... ok  (0s 1ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanding "src/PICKUP_SCHEMA.hdbtable"... ok  (0s 5ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanding "src/V_INVOICE_BASE.hdbview"... ok  (0s 6ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanding... ok  (0s 42ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "cfg/repoiodb_mtar.hdbsynonymconfig"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "cfg/repoiodb_mtar.hdbsynonymconfig"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::CUSTOMER.explicit"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::CUSTOMER.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_HEADER.explicit"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_HEADER.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_ITEM.explicit"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_ITEM.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/PICKUP_SCHEMA.hdbtable"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/V_INVOICE_BASE.hdbview"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/pickup_admin_grant.hdbrole"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/pickup_consumer.hdbrole"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/repoiodb_mtar.hdbsynonym"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/repoiodb_mtar.hdbsynonym$repoiodb::CUSTOMER.hdbsynonym"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "src/repoiodb_mtar.hdbsynonym"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/repoiodb_mtar.hdbsynonym$repoiodb::CUSTOMER.hdbsynonym"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/repoiodb_mtar.hdbsynonym$repoiodb::INVOICE_HEADER.hdbsynonym"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "src/repoiodb_mtar.hdbsynonym"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/repoiodb_mtar.hdbsynonym$repoiodb::INVOICE_HEADER.hdbsynonym"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/repoiodb_mtar.hdbsynonym$repoiodb::INVOICE_ITEM.hdbsynonym"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "src/repoiodb_mtar.hdbsynonym"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/repoiodb_mtar.hdbsynonym$repoiodb::INVOICE_ITEM.hdbsynonym"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/repoiodb_mtar.hdbsynonym"... ok  (0s 2ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/pickup_admin_grant.hdbrole"... ok  (0s 2ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/pickup_consumer.hdbrole"... ok  (0s 2ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/PICKUP_SCHEMA.hdbtable"... ok  (0s 7ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "src/V_INVOICE_BASE.hdbview"... ok  (0s 6ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling... ok  (0s 22ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merging...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merging "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::CUSTOMER.explicit"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merging "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::CUSTOMER.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/repoiodb::CUSTOMER" (merged)...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merged from "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::CUSTOMER.explicit"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/repoiodb::CUSTOMER" (merged)... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merging "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_HEADER.explicit"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merging "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_HEADER.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/repoiodb::INVOICE_HEADER" (merged)...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merged from "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_HEADER.explicit"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merging "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_ITEM.explicit"...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/repoiodb::INVOICE_HEADER" (merged)... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merging "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_ITEM.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/repoiodb::INVOICE_ITEM" (merged)...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merged from "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_ITEM.explicit"
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/repoiodb::INVOICE_ITEM" (merged)... ok  (0s 0ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Merging... ok  (0s 115ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Calculating dependencies... ok  (0s 240ms)
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Processing work list...
   2022-11-30T09:57:28.88+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/repoiodb::CUSTOMER"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Merged from "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::CUSTOMER.explicit"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/repoiodb::INVOICE_HEADER"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Merged from "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_HEADER.explicit"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/repoiodb::INVOICE_ITEM"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Merged from "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_ITEM.explicit"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "cfg/repoiodb_mtar.hdbsynonymconfig"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "cfg/repoiodb_mtar.hdbsynonymconfig"... ok  (0s 0ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::CUSTOMER.explicit"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::CUSTOMER.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_HEADER.explicit"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_HEADER.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_ITEM.explicit"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Expanded from "cfg/repoiodb_mtar.hdbsynonymconfig"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "cfg/repoiodb_mtar.hdbsynonymconfig$repoiodb::INVOICE_ITEM.explicit"... ok  (0s 0ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/pickup_admin_grant.hdbrole"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/PICKUP_SCHEMA.hdbtable"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/pickup_consumer.hdbrole"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/repoiodb_mtar.hdbsynonym"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/repoiodb_mtar.hdbsynonym"... ok  (0s 2ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/PICKUP_SCHEMA.hdbtable"... ok  (0s 25ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/repoiodb::CUSTOMER"... ok  (0s 28ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/repoiodb_mtar.hdbsynonym$repoiodb::CUSTOMER.hdbsynonym"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Expanded from "src/repoiodb_mtar.hdbsynonym"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/repoiodb::INVOICE_HEADER"... ok  (0s 28ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/repoiodb_mtar.hdbsynonym$repoiodb::INVOICE_HEADER.hdbsynonym"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Expanded from "src/repoiodb_mtar.hdbsynonym"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/repoiodb::INVOICE_ITEM"... ok  (0s 29ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/repoiodb_mtar.hdbsynonym$repoiodb::INVOICE_ITEM.hdbsynonym"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Expanded from "src/repoiodb_mtar.hdbsynonym"
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/pickup_admin_grant.hdbrole"... ok  (0s 81ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/pickup_consumer.hdbrole"... ok  (0s 86ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/repoiodb_mtar.hdbsynonym$repoiodb::CUSTOMER.hdbsynonym"... ok  (0s 86ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/repoiodb_mtar.hdbsynonym$repoiodb::INVOICE_HEADER.hdbsynonym"... ok  (0s 86ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/repoiodb_mtar.hdbsynonym$repoiodb::INVOICE_ITEM.hdbsynonym"... ok  (0s 88ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/V_INVOICE_BASE.hdbview"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying "src/V_INVOICE_BASE.hdbview"... ok  (0s 29ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Processing work list... ok  (0s 162ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Postprocessing deployed files...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Postprocessing "src/pickup_admin_grant.hdbrole"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Postprocessing "src/pickup_admin_grant.hdbrole"... ok  (0s 102ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Postprocessing "src/pickup_consumer.hdbrole"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Postprocessing "src/pickup_consumer.hdbrole"... ok  (0s 12ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Postprocessing deployed files... ok  (0s 126ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Finalizing...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Finalizing... ok  (0s 195ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Make succeeded (0 warnings): 8 files deployed (effective 17), 0 files undeployed (effective 0), 0 dependent files redeployed
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Making... ok  (0s 989ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"... ok  (0s 12ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 8 files to deploy, 0 files to undeploy... ok  (1s 34ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"... ok (1s 293ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT No default-access-role handling needed; global role "PICKUP::access_role" will not be adapted
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"...
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"... ok (0s 0ms)
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deployment to container PICKUP done [Deployment ID: none].
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT Deployment ended at 2022-11-30 09:57:29
   2022-11-30T09:57:29.40+0000 [APP/TASK/deploy/0] OUT (5s 729ms)
   2022-11-30T09:57:29.41+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-11-30T09:57:29.41+0000 [APP/TASK/deploy/0] ERR npm notice New major version of npm available! 8.15.0 -> 9.1.2
   2022-11-30T09:57:29.41+0000 [APP/TASK/deploy/0] ERR npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.2>
   2022-11-30T09:57:29.41+0000 [APP/TASK/deploy/0] ERR npm notice Run `npm install -g npm@9.1.2` to update!
   2022-11-30T09:57:29.41+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-11-30T09:57:29.42+0000 [APP/TASK/deploy/0] OUT Exit status 0
   2022-11-30T09:57:29.83+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f stopping instance f0af81da-07fd-43b8-8eb6-48cc1212637c
   2022-11-30T09:57:29.83+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f destroying container for instance f0af81da-07fd-43b8-8eb6-48cc1212637c
   2022-11-30T09:57:30.43+0000 [CELL/0] OUT Cell e9aa27aa-5635-4e65-b14a-0ae5b04d7d5f successfully destroyed container for instance f0af81da-07fd-43b8-8eb6-48cc1212637c
   ```