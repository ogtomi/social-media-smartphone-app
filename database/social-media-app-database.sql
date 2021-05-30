CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "surname" varchar,
  "email" varchar,
  "password" text,
  "created_at" timestamp,
  "profile_image" bytea,
  "date_of_birth" date,
  "sex" varchar,
  "short_description" varchar
);

CREATE TABLE "friends" (
  "id" SERIAL UNIQUE,
  "user_one_id" int,
  "user_two_id" int,
  "add_date" timestamp,
	PRIMARY KEY("user_one_id","user_two_id")
);

CREATE TABLE "wall_posts" (
  "id" SERIAL UNIQUE,
  "creator_id" int,
  "created_at" timestamp,
  "content_text" varchar,
  "content_image" bytea,
	PRIMARY KEY("id", "creator_id")
);

CREATE TABLE "wall_post_comments" (
  "wall_post_id" int,
  "comment_author" int,
  "created_at" timestamp,
  "comment_text" varchar,
	PRIMARY KEY("wall_post_id", "comment_author")
);

CREATE TABLE "wall_post_likes" (
  "wall_post_id" int,
  "user_liked_id" int,
  "liked_at" timestamp,
	PRIMARY KEY("wall_post_id", "user_liked_id")
);

CREATE TABLE "events" (
  "id" SERIAL UNIQUE,
  "event_author_id" int,
  "created_at" timestamp,
  "event_date" timestamp,
  "event_text" varchar,
  "event_imaga" bytea,
	PRIMARY KEY("id","event_author_id")
);

CREATE TABLE "event_participants" (
  "id" SERIAL UNIQUE,
  "participant_id" int,
  "event_id" int,
  "joined_at" timestamp,
	PRIMARY KEY("participant_id","event_id")
);

CREATE TABLE "conversations" (
  "id" SERIAL UNIQUE,
  "message_sender" int,
  "message_receiver" int,
  "message_text" text,
  "sent" timestamp,
	PRIMARY KEY("message_sender","message_receiver")
);

ALTER TABLE "wall_posts" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "wall_post_comments" ADD FOREIGN KEY ("wall_post_id") REFERENCES "wall_posts" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "wall_post_comments" ADD FOREIGN KEY ("comment_author") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "events" ADD FOREIGN KEY ("event_author_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "friends" ADD FOREIGN KEY ("user_one_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "friends" ADD FOREIGN KEY ("user_two_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "event_participants" ADD FOREIGN KEY ("participant_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "event_participants" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "conversations" ADD FOREIGN KEY ("message_sender") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "conversations" ADD FOREIGN KEY ("message_receiver") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "wall_post_likes" ADD FOREIGN KEY ("wall_post_id") REFERENCES "wall_posts" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE "wall_post_likes" ADD FOREIGN KEY ("user_liked_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;