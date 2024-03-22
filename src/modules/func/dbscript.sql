create database beshegercom_audit_service;
-- tables
	-- AuditObject
    -- AuditableArea
    -- checklist
    -- riskitems
    -- auditteam
    -- audituniverse
    -- anualplan
    -- risk score
    -- auditors
    -- auditees
    -- auditscheduls
    -- engagement
    -- Audit Program
    -- wbs
    -- engagement letter
    -- audit finding
    -- audit report
create table audit_team(
	ID int auto_increment primary key,
    team_name varchar(100) unique,
    date_created date
);


create table audit_object(
	ID int auto_increment primary key,
    object_name varchar(100) unique,
    object_description varchar(500),
    object_type int,
    date_created date,
    created_by int
);
create table auditable_area(
	ID int auto_increment primary key,
    object_id int,
    area_name varchar(100),
    area_description varchar(500)
);

create table risk_regster(
	ID int auto_increment primary key,
    risk_name varchar(100),
    risk_description varchar(500),
    control_bjective varchar(200)
);

create table org_policy_procedure(
ID int auto_increment primary key,
doc_path varchar(1000)
);

create table checklist(
ID int auto_increment primary key,
area_id int,
object_id int,
porpose varchar(100),
supporting_criateria varchar(100),
checking_methods varchar(5000)
);

	