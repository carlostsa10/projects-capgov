create database projectscapgov

create table if not exists users(
  id uuid primary key,
  name text not null,
  username text not null unique foreign key,
  password text not null
  );

create table if not exists projects(
  id uuid primary key,
  title text not null,
  zip_code varchar(8) not null,
  cost int not null,
  done boolean default false,
  deadline date not null,
  username text not null,
  foreign key (username) references users(username),
  created_at date default CURRENT_DATE,
  updated_at date default CURRENT_DATE
);
  