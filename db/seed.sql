create table foodlog(
    entry_id serial primary key,
    user_id integer references users,
    date date,
    meal varchar,
    name varchar,
    foodURI varchar,
    measure varchar,
    measureURI varchar,
    quantity integer,
    calories integer,
    fat integer,
    carbohydrates integer,
    protein integer
)