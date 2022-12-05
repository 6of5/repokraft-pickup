# Log - Deploy MTAR and download logs of mtar deployment

[Back to Change Log](../CHANGELOG.md)

## Deployment of MTAR via SAP BAS

```shell
via right-click mta_archives/repokraft_pickup_1.1.0.mtar and select "Deploy MTA Archiv")
```

Output
```shell
Deploying multi-target app archive /home/user/projects/pickup/mta_archives/repokraft_pickup_1.1.0.mtar in org 9a4c047ftrial / space dev as hp+blue@hanadevs.de...

Uploading 1 files...
  /home/user/projects/pickup/mta_archives/repokraft_pickup_1.1.0.mtar
Error occurred: Post "https://deploy-service.cf.us10-001.hana.ondemand.com/api/v1/spaces/08c0eb6f-7618-4ab0-a115-e5eb898145aa/files": retry is needed. Retrying after: 3s.
OK
Operation ID: 1c489164-7465-11ed-894c-eeee0a879753
Deploying in org "9a4c047ftrial" and space "dev"
Detected MTA schema version: "3"
Detected deployed MTA with ID "repokraft_pickup" and version "1.0.0"
Detected new MTA version: "1.1.0"
Deployed MTA version: "1.0.0"
Processing service "pickup_hdi"...
1 of 1 done
Updating application "pickup_db"...
Unbinding service instance "repoiodb_mtar" from application "pickup_db"...
Unbinding service instance "pickup_hdi" from application "pickup_db"...
Binding service instance "repoiodb_mtar" to application "pickup_db"...
Binding service instance "pickup_hdi" to application "pickup_db"...
Uploading application "pickup_db"...
Started async upload of application "pickup_db"
Scaling application "pickup_db" to "1" instances... 
Staging application "pickup_db"...
Application "pickup_db" staged
Executing task "deploy" on application "pickup_db"...
Skipping deletion of services, because the command line option "--delete-services" is not specified.
Process finished.
Use "cf dmol -i 1c489164-7465-11ed-894c-eeee0a879753" to download the logs of the process.
```

## Download Logs from pickup_db app

```shell
cf logs pickup_db --recent > db-deployment-log.txt
```

```shell
Retrieving logs for app pickup_db in org 9a4c047ftrial / space dev as hp+blue@hanadevs.de...

   2022-12-05T06:22:12.52+0000 [API/29] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"metadata"=>{"annotations"=>{"mta_id"=>"repokraft_pickup", "mta_version"=>"1.1.0", "mta_module"=>"{\"name\":\"pickup_db\"}", "mta_module_provided_dependencies"=>"[]", "mta_bound_services"=>"[\"pickup_hdi\"]"}, "labels"=>{"mta_id"=>"6768c43748626c635da10d7d2518ee65"}}})
   2022-12-05T06:22:12.84+0000 [API/14] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"lifecycle"=>{"data"=>{}, "type"=>"buildpack"}})
   2022-12-05T06:22:13.11+0000 [API/6] OUT Updating process: "web"
   2022-12-05T06:22:38.06+0000 [API/8] OUT Uploading app package for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-05T06:22:38.26+0000 [API/14] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({"environment_variables"=>"[PRIVATE DATA HIDDEN]"})
   2022-12-05T06:22:51.65+0000 [API/12] OUT Scaling process: "web"
   2022-12-05T06:22:52.03+0000 [API/37] OUT Creating build for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-05T06:22:52.86+0000 [STG/0] OUT Downloading sap_java_buildpack_1_59...
   2022-12-05T06:22:52.86+0000 [STG/0] OUT Downloading python_buildpack...
   2022-12-05T06:22:52.86+0000 [STG/0] OUT Downloading ruby_buildpack...
   2022-12-05T06:22:52.86+0000 [STG/0] OUT Downloading nodejs_buildpack...
   2022-12-05T06:22:52.86+0000 [STG/0] OUT Downloading binary_buildpack...
   2022-12-05T06:22:52.90+0000 [STG/0] OUT Downloaded binary_buildpack
   2022-12-05T06:22:52.90+0000 [STG/0] OUT Downloading go_buildpack...
   2022-12-05T06:22:52.90+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_59
   2022-12-05T06:22:52.90+0000 [STG/0] OUT Downloading sap_java_buildpack_1_63...
   2022-12-05T06:22:52.91+0000 [STG/0] OUT Downloaded nodejs_buildpack
   2022-12-05T06:22:52.91+0000 [STG/0] OUT Downloading sap_java_buildpack...
   2022-12-05T06:22:52.91+0000 [STG/0] OUT Downloaded ruby_buildpack
   2022-12-05T06:22:52.91+0000 [STG/0] OUT Downloading staticfile_buildpack...
   2022-12-05T06:22:52.93+0000 [STG/0] OUT Downloaded python_buildpack
   2022-12-05T06:22:52.94+0000 [STG/0] OUT Downloaded go_buildpack
   2022-12-05T06:22:52.94+0000 [STG/0] OUT Downloading java_buildpack...
   2022-12-05T06:22:52.94+0000 [STG/0] OUT Downloading sap_java_buildpack_1_60...
   2022-12-05T06:22:52.94+0000 [STG/0] OUT Downloaded sap_java_buildpack
   2022-12-05T06:22:52.94+0000 [STG/0] OUT Downloaded staticfile_buildpack
   2022-12-05T06:22:52.94+0000 [STG/0] OUT Downloading r_buildpack...
   2022-12-05T06:22:52.94+0000 [STG/0] OUT Downloading php_buildpack...
   2022-12-05T06:22:52.95+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_63
   2022-12-05T06:22:52.95+0000 [STG/0] OUT Downloading dotnet_core_buildpack...
   2022-12-05T06:22:52.97+0000 [STG/0] OUT Downloaded sap_java_buildpack_1_60
   2022-12-05T06:22:52.97+0000 [STG/0] OUT Downloading nginx_buildpack...
   2022-12-05T06:22:52.97+0000 [STG/0] OUT Downloaded java_buildpack
   2022-12-05T06:22:52.98+0000 [STG/0] OUT Downloaded r_buildpack
   2022-12-05T06:22:52.99+0000 [STG/0] OUT Downloaded nginx_buildpack
   2022-12-05T06:22:52.99+0000 [STG/0] OUT Downloaded php_buildpack
   2022-12-05T06:22:52.99+0000 [STG/0] OUT Downloaded dotnet_core_buildpack
   2022-12-05T06:22:52.99+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 creating container for instance 93bc73fe-0a5d-42d8-8a75-75fac7a3aba0
   2022-12-05T06:22:53.35+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 successfully created container for instance 93bc73fe-0a5d-42d8-8a75-75fac7a3aba0
   2022-12-05T06:22:53.74+0000 [STG/0] OUT Downloading app package...
   2022-12-05T06:22:53.74+0000 [STG/0] OUT Downloading build artifacts cache...
   2022-12-05T06:22:53.91+0000 [STG/0] OUT Downloaded build artifacts cache (216B)
   2022-12-05T06:22:56.03+0000 [STG/0] OUT Downloaded app package (60.4M)
   2022-12-05T06:22:56.57+0000 [STG/0] OUT -----> Nodejs Buildpack version 1.8.1
   2022-12-05T06:22:56.57+0000 [STG/0] OUT [31;1m**WARNING**[0m buildpack version changed from 1.8.0 to 1.8.1
   2022-12-05T06:22:56.96+0000 [STG/0] OUT -----> Installing binaries
   2022-12-05T06:22:56.96+0000 [STG/0] OUT engines.node (package.json): ^16
   2022-12-05T06:22:56.96+0000 [STG/0] OUT engines.npm (package.json): unspecified (use default)
   2022-12-05T06:22:56.96+0000 [STG/0] OUT -----> Installing node 16.17.1
   2022-12-05T06:22:56.96+0000 [STG/0] OUT Copy [/tmp/buildpacks/3118e939268fccf3a3ade4df9e465176/dependencies/33da2d39aed1341b8fa53e663d60b54c/node_16.17.1_linux_x64_cflinuxfs3_c74713ec.tgz]
   2022-12-05T06:22:58.36+0000 [STG/0] OUT Using default npm version: 8.15.0
   2022-12-05T06:22:58.36+0000 [STG/0] OUT -----> Installing yarn 1.22.19
   2022-12-05T06:22:58.36+0000 [STG/0] OUT Copy [/tmp/buildpacks/3118e939268fccf3a3ade4df9e465176/dependencies/0f06052381cbcef1593bd279ca3d9458/yarn_1.22.19_linux_noarch_any-stack_32d0e82e.tgz]
   2022-12-05T06:22:58.68+0000 [STG/0] OUT Installed yarn 1.22.19
   2022-12-05T06:22:58.68+0000 [STG/0] OUT -----> Creating runtime environment
   2022-12-05T06:22:58.68+0000 [STG/0] OUT NODE_ENV=production
   2022-12-05T06:22:58.68+0000 [STG/0] OUT NODE_HOME=/tmp/contents1140571693/deps/0/node
   2022-12-05T06:22:58.68+0000 [STG/0] OUT NODE_MODULES_CACHE=true
   2022-12-05T06:22:58.68+0000 [STG/0] OUT NODE_VERBOSE=false
   2022-12-05T06:22:58.68+0000 [STG/0] OUT NPM_CONFIG_LOGLEVEL=error
   2022-12-05T06:22:58.68+0000 [STG/0] OUT NPM_CONFIG_PRODUCTION=true
   2022-12-05T06:22:58.68+0000 [STG/0] OUT -----> Building dependencies
   2022-12-05T06:22:58.68+0000 [STG/0] OUT Prebuild detected (node_modules already exists)
   2022-12-05T06:22:58.68+0000 [STG/0] OUT Rebuilding any native modules
   2022-12-05T06:22:59.44+0000 [STG/0] OUT rebuilt dependencies successfully
   2022-12-05T06:22:59.44+0000 [STG/0] OUT npm notice
   2022-12-05T06:22:59.44+0000 [STG/0] OUT npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-05T06:22:59.44+0000 [STG/0] OUT npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-05T06:22:59.44+0000 [STG/0] OUT npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-05T06:22:59.44+0000 [STG/0] OUT npm notice
   2022-12-05T06:22:59.44+0000 [STG/0] OUT Installing any new modules (package.json + package-lock.json)
   2022-12-05T06:22:59.90+0000 [STG/0] OUT up to date in 189ms
   2022-12-05T06:23:00.70+0000 [STG/0] OUT Contrast Security no credentials found. Will not write environment files.
   2022-12-05T06:23:00.70+0000 [STG/0] OUT inside Sealights hook
   2022-12-05T06:23:00.70+0000 [STG/0] OUT service is not configured to run with Sealights
   2022-12-05T06:23:14.01+0000 [STG/0] OUT Exit status 0
   2022-12-05T06:23:14.01+0000 [STG/0] OUT Uploading droplet, build artifacts cache...
   2022-12-05T06:23:14.01+0000 [STG/0] OUT Uploading droplet...
   2022-12-05T06:23:14.01+0000 [STG/0] OUT Uploading build artifacts cache...
   2022-12-05T06:23:14.05+0000 [STG/0] OUT Uploaded build artifacts cache (224B)
   2022-12-05T06:23:15.07+0000 [API/15] OUT Creating droplet for app with guid a11d6017-e671-4123-b06d-be7882893e50
   2022-12-05T06:23:22.62+0000 [STG/0] OUT Uploaded droplet (93.7M)
   2022-12-05T06:23:22.64+0000 [STG/0] OUT Uploading complete
   2022-12-05T06:23:22.93+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 stopping instance 93bc73fe-0a5d-42d8-8a75-75fac7a3aba0
   2022-12-05T06:23:22.93+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 destroying container for instance 93bc73fe-0a5d-42d8-8a75-75fac7a3aba0
   2022-12-05T06:23:23.54+0000 [STG/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 successfully destroyed container for instance 93bc73fe-0a5d-42d8-8a75-75fac7a3aba0
   2022-12-05T06:23:34.08+0000 [API/23] OUT Updated app with guid a11d6017-e671-4123-b06d-be7882893e50 ({:droplet_guid=>"22df2833-990b-4ad8-bda9-42f036902935"})
   2022-12-05T06:23:34.81+0000 [CELL/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 creating container for instance 2cebded7-8aa5-46ff-b1d4-d38073ade776
   2022-12-05T06:23:35.16+0000 [CELL/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 successfully created container for instance 2cebded7-8aa5-46ff-b1d4-d38073ade776
   2022-12-05T06:23:41.27+0000 [APP/TASK/deploy/0] OUT > start
   2022-12-05T06:23:41.27+0000 [APP/TASK/deploy/0] OUT > node node_modules/@sap/hdi-deploy/deploy.js
   2022-12-05T06:23:43.17+0000 [APP/TASK/deploy/0] OUT @sap/hdi-deploy, version 4.5.1 (mode default), server version 4.00.000.00.1668498444 (4.0.0.0), node version 16.17.1, HDI version 1009, container API version 1004
   2022-12-05T06:23:43.17+0000 [APP/TASK/deploy/0] OUT Deployment started at 2022-12-05 06:23:43
   2022-12-05T06:23:43.17+0000 [APP/TASK/deploy/0] OUT Using hana-client for connection
   2022-12-05T06:23:43.17+0000 [APP/TASK/deploy/0] OUT Using default environment variables from file ".env"
   2022-12-05T06:23:43.17+0000 [APP/TASK/deploy/0] OUT Using service replacements from environment variable "SERVICE_REPLACEMENTS" with 1 replacements
   2022-12-05T06:23:43.27+0000 [APP/TASK/deploy/0] OUT No ignore file at /home/vcap/app/.hdiignore.
   2022-12-05T06:23:43.27+0000 [APP/TASK/deploy/0] OUT Collecting files...
   2022-12-05T06:23:43.27+0000 [APP/TASK/deploy/0] OUT Collecting files... ok (0s 4ms)
   2022-12-05T06:23:43.27+0000 [APP/TASK/deploy/0] OUT 4 directories collected
   2022-12-05T06:23:43.27+0000 [APP/TASK/deploy/0] OUT 14 files collected
   2022-12-05T06:23:43.27+0000 [APP/TASK/deploy/0] OUT 0 reusable modules collected
   2022-12-05T06:23:43.27+0000 [APP/TASK/deploy/0] OUT Target service: pickup_hdi
   2022-12-05T06:23:43.67+0000 [APP/TASK/deploy/0] OUT Session variable APPLICATION is set to "SAP_HDI/dev/9a4c047ftrial".
   2022-12-05T06:23:43.94+0000 [APP/TASK/deploy/0] OUT Previous build with request ID 172 finished at 2022-11-30 09:57:29.352253000 with status Committed and message: Make succeeded (0 warnings): 8 files deployed (effective 17), 0 files undeployed (effective 0), 0 dependent files redeployed.
   2022-12-05T06:23:43.94+0000 [APP/TASK/deploy/0] OUT Processing revoke files...
   2022-12-05T06:23:43.94+0000 [APP/TASK/deploy/0] OUT Processing revoke files... ok (0s 0ms)
   2022-12-05T06:23:43.94+0000 [APP/TASK/deploy/0] OUT Processing grants files...
   2022-12-05T06:23:43.94+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"...
   2022-12-05T06:23:43.94+0000 [APP/TASK/deploy/0] OUT Using grantor service "repoiodb_grantor" of type "hdi"
   2022-12-05T06:23:44.59+0000 [APP/TASK/deploy/0] OUT Processing "cfg/repoiodb_mtar.hdbgrants"... ok
   2022-12-05T06:23:44.59+0000 [APP/TASK/deploy/0] OUT Processing grants files... ok (0s 653ms)
   2022-12-05T06:23:44.59+0000 [APP/TASK/deploy/0] OUT Preprocessing files...
   2022-12-05T06:23:44.59+0000 [APP/TASK/deploy/0] OUT Preprocessing files... ok (0s 0ms)
   2022-12-05T06:23:44.59+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"...
   2022-12-05T06:23:44.79+0000 [APP/TASK/deploy/0] OUT Connecting to the container "PICKUP"... ok (0s 194ms)
   2022-12-05T06:23:44.79+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"...
   2022-12-05T06:23:45.20+0000 [APP/TASK/deploy/0] OUT Locking the container "PICKUP"... ok (0s 409ms)
   2022-12-05T06:23:45.20+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"...
   2022-12-05T06:23:45.20+0000 [APP/TASK/deploy/0] OUT Deleting files...
   2022-12-05T06:23:45.41+0000 [APP/TASK/deploy/0] OUT Deleting files... ok
   2022-12-05T06:23:45.41+0000 [APP/TASK/deploy/0] OUT Writing files...
   2022-12-05T06:23:45.79+0000 [APP/TASK/deploy/0] OUT Writing files... ok
   2022-12-05T06:23:45.79+0000 [APP/TASK/deploy/0] OUT Synchronizing files with the container "PICKUP"... ok (0s 592ms)
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT added files: [
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/local.hdbsynonym",
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/tables/PICKUP_SCHEMA.hdbtable",
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/views/V_INVOICE_BASE.hdbview",
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/views/V_REPODB_INVOICE_HEADER.hdbview",
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/views/V_REPODB_INVOICE_ITEM.hdbview",
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/views/V_SYS_M_TABLES.hdbview",
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/views/V_SYS_VIEWS.hdbview"
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT ]
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT modified files: []
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT deleted files: [
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/PICKUP_SCHEMA.hdbtable",
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT "src/V_INVOICE_BASE.hdbview"
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT ]
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT 7 modified or added files are scheduled for deploy based on delta detection
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT 2 deleted files are scheduled for undeploy based on delta detection (filtered by undeploy allowlist)
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for deploy based on explicit specification
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT 0 files are scheduled for undeploy based on explicit specification
   2022-12-05T06:23:46.04+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"...
   2022-12-05T06:23:46.80+0000 [APP/TASK/deploy/0] OUT Polling messages for request id: 240
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 7 files to deploy, 2 files to undeploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Disabling table replication for the container schema "PICKUP"... ok  (0s 11ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Migrating libraries...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Migrating libraries... ok  (0s 34ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Making...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Preparing...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Preparing the make transaction...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Preparing the make transaction... ok  (0s 96ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/local.hdbsynonym" for deploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/local.hdbsynonym" for deploy... ok  (0s 82ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/tables/PICKUP_SCHEMA.hdbtable" for deploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/tables/PICKUP_SCHEMA.hdbtable" for deploy... ok  (0s 2ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_INVOICE_BASE.hdbview" for deploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_INVOICE_BASE.hdbview" for deploy... ok  (0s 2ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_REPODB_INVOICE_HEADER.hdbview" for deploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_REPODB_INVOICE_HEADER.hdbview" for deploy... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_REPODB_INVOICE_ITEM.hdbview" for deploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_REPODB_INVOICE_ITEM.hdbview" for deploy... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_SYS_M_TABLES.hdbview" for deploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_SYS_M_TABLES.hdbview" for deploy... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_SYS_VIEWS.hdbview" for deploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/views/V_SYS_VIEWS.hdbview" for deploy... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/PICKUP_SCHEMA.hdbtable" for undeploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/PICKUP_SCHEMA.hdbtable" for undeploy... ok  (0s 1ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/V_INVOICE_BASE.hdbview" for undeploy...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Adding "src/V_INVOICE_BASE.hdbview" for undeploy... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Preparing... ok  (0s 368ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Calculating dependencies...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/local.hdbsynonym"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/tables/PICKUP_SCHEMA.hdbtable"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_INVOICE_BASE.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_REPODB_INVOICE_HEADER.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_REPODB_INVOICE_ITEM.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_SYS_M_TABLES.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_SYS_VIEWS.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/local.hdbsynonym"... ok  (0s 2ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_REPODB_INVOICE_HEADER.hdbview"... ok  (0s 7ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/tables/PICKUP_SCHEMA.hdbtable"... ok  (0s 8ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_REPODB_INVOICE_ITEM.hdbview"... ok  (0s 7ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_SYS_M_TABLES.hdbview"... ok  (0s 7ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_SYS_VIEWS.hdbview"... ok  (0s 7ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding "src/views/V_INVOICE_BASE.hdbview"... ok  (0s 10ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanding... ok  (0s 59ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym"... ok  (0s 2ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$DUMMY.defaults"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$DUMMY.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$DUMMY.hdbsynonym"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$DUMMY.hdbsynonym"... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$M_TABLES.defaults"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$M_TABLES.hdbsynonym"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$VIEWS.defaults"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$M_TABLES.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$M_TABLES.hdbsynonym"... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$VIEWS.hdbsynonym"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/tables/PICKUP_SCHEMA.hdbtable"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$VIEWS.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/local.hdbsynonym$VIEWS.hdbsynonym"... ok  (0s 0ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_INVOICE_BASE.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_REPODB_INVOICE_HEADER.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_REPODB_INVOICE_ITEM.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_SYS_M_TABLES.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_SYS_VIEWS.hdbview"...
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Warning: com.sap.hana.di.view: "*" is used in the column list of a query statement; "*" is not stable with regard to the column ordering of underlying objects [8250030]
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT at "src/views/V_REPODB_INVOICE_HEADER.hdbview" (2:1)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_REPODB_INVOICE_HEADER.hdbview"... ok  (0s 7ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_REPODB_INVOICE_ITEM.hdbview"... ok  (0s 8ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_INVOICE_BASE.hdbview"... ok  (0s 8ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/tables/PICKUP_SCHEMA.hdbtable"... ok  (0s 8ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Warning: com.sap.hana.di.view: "*" is used in the column list of a query statement; "*" is not stable with regard to the column ordering of underlying objects [8250030]
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT at "src/views/V_SYS_VIEWS.hdbview" (2:1)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_SYS_VIEWS.hdbview"... ok  (0s 7ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Warning: com.sap.hana.di.view: "*" is used in the column list of a query statement; "*" is not stable with regard to the column ordering of underlying objects [8250030]
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT at "src/views/V_SYS_M_TABLES.hdbview" (2:1)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling "src/views/V_SYS_M_TABLES.hdbview"... ok  (0s 9ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Precompiling... ok  (0s 26ms)
   2022-12-05T06:23:46.83+0000 [APP/TASK/deploy/0] OUT Merging...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merging "src/local.hdbsynonym$DUMMY.defaults"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merging "src/local.hdbsynonym$DUMMY.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merging "src/local.hdbsynonym$M_TABLES.defaults"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/DUMMY" (merged)...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merged from "src/local.hdbsynonym$DUMMY.defaults"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merging "src/local.hdbsynonym$M_TABLES.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/M_TABLES" (merged)...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merged from "src/local.hdbsynonym$M_TABLES.defaults"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/M_TABLES" (merged)... ok  (0s 0ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/DUMMY" (merged)... ok  (0s 0ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merging "src/local.hdbsynonym$VIEWS.defaults"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merging "src/local.hdbsynonym$VIEWS.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/VIEWS" (merged)...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merged from "src/local.hdbsynonym$VIEWS.defaults"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Precompiling "$synonym.config/VIEWS" (merged)... ok  (0s 1ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merging... ok  (0s 151ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Calculating dependencies... ok  (0s 325ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Processing work list...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Undeploying "src/PICKUP_SCHEMA.hdbtable"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Keeping table "PICKUP_SCHEMA" for new owner "src/tables/PICKUP_SCHEMA.hdbtable"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Undeploying "src/V_INVOICE_BASE.hdbview"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/DUMMY"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merged from "src/local.hdbsynonym$DUMMY.defaults"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/M_TABLES"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merged from "src/local.hdbsynonym$M_TABLES.defaults"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/VIEWS"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Merged from "src/local.hdbsynonym$VIEWS.defaults"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$DUMMY.defaults"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$DUMMY.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$M_TABLES.defaults"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$M_TABLES.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$VIEWS.defaults"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$VIEWS.defaults"... ok  (0s 0ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_REPODB_INVOICE_HEADER.hdbview"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym"... ok  (0s 2ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_REPODB_INVOICE_ITEM.hdbview"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Undeploying "src/PICKUP_SCHEMA.hdbtable"... ok  (0s 205ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/tables/PICKUP_SCHEMA.hdbtable"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Using existing table "PICKUP_SCHEMA" from former owner "src/PICKUP_SCHEMA.hdbtable"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/DUMMY"... ok  (0s 249ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$DUMMY.hdbsynonym"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/M_TABLES"... ok  (0s 250ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$M_TABLES.hdbsynonym"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT "PICKUP_SCHEMA": the new structure of the table matches the current one
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/tables/PICKUP_SCHEMA.hdbtable"... ok  (0s 71ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "$synonym.config/VIEWS"... ok  (0s 277ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$VIEWS.hdbsynonym"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Expanded from "src/local.hdbsynonym"
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Undeploying "src/V_INVOICE_BASE.hdbview"... ok  (0s 278ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_INVOICE_BASE.hdbview"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_REPODB_INVOICE_ITEM.hdbview"... ok  (0s 284ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_REPODB_INVOICE_HEADER.hdbview"... ok  (0s 286ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_INVOICE_BASE.hdbview"... ok  (0s 170ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$DUMMY.hdbsynonym"... ok  (0s 253ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$VIEWS.hdbsynonym"... ok  (0s 228ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_SYS_VIEWS.hdbview"...
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/local.hdbsynonym$M_TABLES.hdbsynonym"... ok  (0s 256ms)
   2022-12-05T06:23:47.84+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_SYS_M_TABLES.hdbview"...
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_SYS_VIEWS.hdbview"... ok  (0s 346ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Deploying "src/views/V_SYS_M_TABLES.hdbview"... ok  (0s 347ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Processing work list... ok  (0s 870ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Postprocessing deployed files...
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Postprocessing "src/pickup_admin_grant.hdbrole"...
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Postprocessing "src/pickup_admin_grant.hdbrole"... ok  (0s 111ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Postprocessing "src/pickup_consumer.hdbrole"...
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Postprocessing "src/pickup_consumer.hdbrole"... ok  (0s 14ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Postprocessing deployed files... ok  (0s 139ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Finalizing...
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Finalizing... ok  (0s 216ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Make succeeded (3 warnings): 7 files deployed (effective 16), 2 files undeployed (effective 2), 0 dependent files redeployed
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Making... ok  (2s 40ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"...
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Enabling table replication for the container schema "PICKUP"... ok  (0s 11ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Starting make in the container "PICKUP" with 7 files to deploy, 2 files to undeploy... ok  (2s 108ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Deploying to the container "PICKUP"... ok (2s 378ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT No default-access-role handling needed; global role "PICKUP::access_role" will not be adapted
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"...
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Unlocking the container "PICKUP"... ok (0s 0ms)
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Deployment to container PICKUP done [Deployment ID: none].
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT Deployment ended at 2022-12-05 06:23:48
   2022-12-05T06:23:48.42+0000 [APP/TASK/deploy/0] OUT (6s 764ms)
   2022-12-05T06:23:48.43+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-05T06:23:48.43+0000 [APP/TASK/deploy/0] ERR npm notice New major version of npm available! 8.15.0 -> 9.1.3
   2022-12-05T06:23:48.43+0000 [APP/TASK/deploy/0] ERR npm notice Changelog: <https://github.com/npm/cli/releases/tag/v9.1.3>
   2022-12-05T06:23:48.43+0000 [APP/TASK/deploy/0] ERR npm notice Run `npm install -g npm@9.1.3` to update!
   2022-12-05T06:23:48.43+0000 [APP/TASK/deploy/0] ERR npm notice
   2022-12-05T06:23:48.46+0000 [APP/TASK/deploy/0] OUT Exit status 0
   2022-12-05T06:23:48.81+0000 [CELL/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 stopping instance 2cebded7-8aa5-46ff-b1d4-d38073ade776
   2022-12-05T06:23:48.81+0000 [CELL/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 destroying container for instance 2cebded7-8aa5-46ff-b1d4-d38073ade776
   2022-12-05T06:23:49.70+0000 [CELL/0] OUT Cell 7806f5a7-dce8-4b2b-857b-5b04b577ad24 successfully destroyed container for instance 2cebded7-8aa5-46ff-b1d4-d38073ade776
```