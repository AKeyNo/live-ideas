CREATE TABLE IF NOT EXISTS users (
  user_id INT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  hashed_password TEXT NOT NULL,
  summary TEXT NOT NULL,
  token TEXT,
  creation_time timestamptz NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS items_for_sale (
    item_id INT NOT NULL UNIQUE,
    creator_id INT NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    is_for_sale BOOLEAN NOT NULL DEFAULT TRUE,
    creation_time timestamptz NOT NULL,
    department TEXT NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY(creator_id)
        REFERENCES users(user_id),
    PRIMARY KEY(item_id)
);

CREATE TABLE IF NOT EXISTS item_rating (
    item_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT NOT NULL,
    review TEXT,
    was_modified BOOLEAN DEFAULT FALSE,
    creation_time timestamptz NOT NULL,
    CONSTRAINT fk_item_id
        FOREIGN KEY(item_id)
        REFERENCES items_for_sale(item_id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
        REFERENCES users(user_id),
    CONSTRAINT rating_threshold CHECK (rating >= 1 AND rating <=5),
    PRIMARY KEY(item_id, user_id)
);

CREATE TABLE IF NOT EXISTS purchase_history (
    transaction_id INT NOT NULL UNIQUE,
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(12, 2) NOT NULL,
    purchase_time timestamptz NOT NULL,
    CONSTRAINT fk_item_id
        FOREIGN KEY(item_id)
        REFERENCES items_for_sale(item_id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
        REFERENCES users(user_id),
    PRIMARY KEY(transaction_id)
);