# Change Log

[Back to README](../README.md)

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