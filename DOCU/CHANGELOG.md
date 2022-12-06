# Change Log

[Back to README](../README.md)

## 2022-12-06

- Work in VSCode
- Build mtar repokraft_pickup_1.2.0.mtar via terminal (VSCode): mbt build --strict -p=cf, see [LOG/LOG_2022-12-06_mtb_v120](LOG/LOG_2022-12-06_mtb_v120.md) 
- add hana-client and xsenv to package.json of db module (need for the taks)
- v1.2.2
- build and deploy (cf deploy mta_archives/repokraft_pickup_1.2.1.mtar), see [LOG/LOG_2022-12-06_deploy_mtar_v121](LOG/LOG_2022-12-06_deploy_mtar_v121.md)

## 2022-12-05

- Synonyms auf DUMMY, M_TABLES, VIEWS aus Schema SYS
- neue Views V_REPODB_INVOICE_HEADER, V_REPODB_INVOICE_ITEM, V_SYS_M_TABLES, V_SYS_VIEWS
- v1.1.0
- build and deploy repokraft_pickup_1.1.0.mtar, see [LOG/LOG_2022-12-05_deploy_mtar_v110](LOG/LOG_2022-12-05_deploy_mtar_v110.md)
- v1.2.0 task map_hdi_schemas fills PICKUP_SCHEMA on db deployment

## 2022-11-30

- add table PICKUP_SCHEMA
- BAS: build mtar (via right-click mta.yaml and "Build MTA Project") -> mta_archives/repokraft_pickup_1.0.0.mtar 
  - see [LOG/LOG_2022-11-30_buildmtar](LOG/LOG_2022-11-30_buildmtar.md)
- BAS: deploy mtar (via right-click mta_archives/repokraft_pickup_1.0.0.mtar and select "Deploy MTA Archiv")
  - see [LOG/LOG_2022-11-30_db-deployment-log](LOG/LOG_2022-11-30_db-deployment-log.md)

## 2022-11-29

- BAS: create synonyms for CUSTOMER, INVOICE_xx of repoiodb_mtar (via grantor)
- BAS: sql view V_INVOICE_BASE
- BAS: create access roles pickup_consumer.hdbrole, pickup_admin_grant.hdbrole

## 2022-11-28

- BAS: Start from Template SAP -> HANA Database Project (project name: pickup, Schema: PICKUP)
- BAS: add database connection (+ sign besides "Database Connections" in SAP HANA PROJECTS view)
  - Connection type: Existing HDI Container
  - HDI service instance name: repoiodb_mtar
- add repoiodb_mtar.grants to gain access to repoiodb_mtar content