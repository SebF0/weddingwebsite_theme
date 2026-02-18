CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS chat_logs (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at      timestamptz DEFAULT now(),
  question        text        NOT NULL,
  answer          text,
  model           text        NOT NULL,
  prompt_version  text        NOT NULL,
  latency_ms      int,
  success         boolean     NOT NULL,
  error_code      text,
  error_message   text
);
