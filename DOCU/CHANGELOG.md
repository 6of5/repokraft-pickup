# Change Log

[Back to README](../README.md)

## 2022-12-05

- Synonyms auf DUMMY, M_TABLES, VIEWS aus Schema SYS
- neue Views V_REPODB_INVOICE_HEADER, V_REPODB_INVOICE_ITEM, V_SYS_M_TABLES, V_SYS_VIEWS
- v1.1.0
- build and deploy repokraft_pickup_1.1.0.mtar

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