-- RSVP submissions from wedding guests.
CREATE TABLE IF NOT EXISTS rsvp (
  id          BIGSERIAL    PRIMARY KEY,
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  name        TEXT         NOT NULL,
  email       TEXT         NOT NULL,
  message     TEXT         NOT NULL
);
