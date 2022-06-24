
ALTER DATABASE interviewtrackingdb MODIFY NAME = interviewtracking;

CREATE DATABASE interviewtracking;

create table c_add_admin
(
Candidate_id	int Primary Key Identity(1,5),	
candidateName	varchar(30),
pSkills		varchar(20)	,
sSkills	varchar(20)	,
experience		tinyint,	
qualification		varchar(20)	,
designation		varchar(30),
noticeperiod		varchar(20)	,
clocation		varchar(30),
passwordC varchar(30),
)

insert into c_add_admin values('darsh','java','corejava',2,'b-tech','SoftwareEngineer','2 mpnths','nagpur','123');
insert into c_add_admin values('aman','C','corejava',5,'bio-tech','SoftwareEngineer',' Immidiate','Pune','123');
insert into c_add_admin values('deepa','c++','corejava',1,'chemistry','assistant','3 mpnths','Mumbai','123');
insert into c_add_admin values('ajay','python','corejava',3,'science','teacher','1 mpnths','Ludhiana','123');






drop table c_add_admin

create table techpannel
(
Interview_Id int primary key	,
Candidate_id int foreign key references c_add_admin,
Techrating int,
techIS	Datetime,
);

drop table techpannel

create table schedule1
(
Schedule_id int primary key Identity(1,5),
Candidate_id int  foreign key references c_add_admin,
Interview_Id int foreign key references techpannel,
HRrating int,
hrIS	Datetime,
FinalStatus bit
);




drop table schedule1



Delete from c_add_admin where Candidate_id=1


create table 

delete from schedule1



select * from techpannel
select * from c_add_admin

select * from  schedule1

delete from schedule1


insert into schedule1 values(16,6,8,'2022-06-17',0);

