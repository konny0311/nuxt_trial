create table technology (id int not null auto_increment, technology varchar(255) not null, primary key (id) );
create table project (id int not null auto_increment, name varchar(255) not null, summary varchar(400), url varchar(2083), primary key (id) );
create table project_tech (id int not null auto_increment, project_id int not null, technology_id int not null,
																	primary key (id),
																	foreign key (project_id) references project(id),
																	foreign key (technology_id) references technology(id) );