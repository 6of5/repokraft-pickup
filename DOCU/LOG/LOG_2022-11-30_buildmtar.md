# Log - build mtar via SAP BAS

[Back to Change Log](../CHANGELOG.md)

```shell
via right-click mta.yaml and "Build MTA Project")
```

created file: mta_archives/repokraft_pickup_1.0.0.mtar 

Output

```shell
[2022-11-30 09:28:38]  INFO Cloud MTA Build Tool version 1.2.18
[2022-11-30 09:28:38]  INFO generating the "Makefile_20221130092838.mta" file...
[2022-11-30 09:28:38]  INFO done
[2022-11-30 09:28:38]  INFO executing the "make -f Makefile_20221130092838.mta p=cf mtar= strict=true mode=" command...
[2022-11-30 09:28:38]  INFO validating the MTA project
[2022-11-30 09:28:38]  INFO validating the MTA project
[2022-11-30 09:28:38]  INFO building the "pickup_db" module...
[2022-11-30 09:28:38]  INFO executing the "npm install --production" command...
npm WARN config production Use `--omit=dev` instead.

up to date in 268ms
[2022-11-30 09:28:39]  INFO the build results of the "pickup_db" module will be packaged and saved in the "/home/user/projects/pickup/.pickup_mta_build_tmp/pickup_db" folder
[2022-11-30 09:28:46]  INFO finished building the "pickup_db" module
[2022-11-30 09:28:46]  INFO generating the metadata...
[2022-11-30 09:28:46]  INFO generating the "/home/user/projects/pickup/.pickup_mta_build_tmp/META-INF/mtad.yaml" file...
[2022-11-30 09:28:46]  INFO generating the MTA archive...
[2022-11-30 09:28:48]  INFO the MTA archive generated at: /home/user/projects/pickup/mta_archives/repokraft_pickup_1.0.0.mtar
[2022-11-30 09:28:48]  INFO cleaning temporary files...
 *  Terminal will be reused by tasks, press any key to close it. 
 ```