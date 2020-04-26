create table technology (id int not null, technology varchar(255) not null, primary key (id) );
create table project (id int not null, name varchar(255) not null, summary varchar(255), primary key (id) );
create table project_tech (id int not null, project_id int not null, technology_id int not null,
																	foreign key (project_id) references project(id),
																	foreign key (technology_id) references technology(id) );