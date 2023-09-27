create database dbApiCarros;

use dbApiCarros;

create table carros (
codigo int primary key auto_increment,
modelo varchar (30),
placa varchar(7)
);

insert into carros (modelo, placa) values ('Toyota Corolla', 'EMO4929');
insert into carros (modelo, placa) values ('Honda Civic', 'ELV1590');
insert into carros (modelo, placa) values ('Ford Fiesta', 'OGD8087');

select * from carros