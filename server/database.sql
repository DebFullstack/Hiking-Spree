CREATE TABLE "user" (
    user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    profile_pic VARCHAR(255),
    unique_parks_visited INT DEFAULT 0
);


CREATE TABLE park (
    park_id SERIAL PRIMARY KEY,
    park_name VARCHAR(255) NOT NULL,
    park_website VARCHAR(255) NOT NULL,
    county VARCHAR(255) NOT NULL,
    hiking_spree_challenge BOOLEAN NOT NULL,
    street_number INT NOT NULL,
    street_name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(2) NOT NULL,
    zipcode INT NOT NULL,
    street_number_2 INT,
    street_name_2 VARCHAR(255),
    city_2 VARCHAR(255),
    state_2 VARCHAR(2),
    zipcode_2 INT
);


CREATE TABLE trail (
    trail_id SERIAL PRIMARY KEY,
    park_id INT REFERENCES park(park_id),
    miles DECIMAL(5, 2) NOT NULL,
    trail_class VARCHAR(50) NOT NULL,
    rating INT NOT NULL,
    pets_allowed BOOLEAN NOT NULL,
    boardwalk BOOLEAN NOT NULL,
    accessible BOOLEAN NOT NULL
);


CREATE TABLE visit (
    visit_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES "user"(user_id),
    park_id INT REFERENCES park(park_id),
    visit_date DATE,
    visit_time TIME,
    rating DECIMAL(4, 2),
    notes TEXT,
    photo_1 VARCHAR(255),
    photo_2 VARCHAR(255),
    photo_3 VARCHAR(255)
);

CREATE TABLE participant (
    participant_id SERIAL PRIMARY KEY,
    visit_id INT REFERENCES visit(visit_id),
    participant_type VARCHAR(255) NOT NULL,
    participant_name VARCHAR(255) NOT NULL,
    tagged_user_id UUID REFERENCES "user"(user_id)
);