'use strict'

module.exports = {
  DATE_FORMAT: 'yyyy-mm-dd HH:MM:ss.l o',

  ERROR_LIKE_KEYS: ['err', 'error'],

  MESSAGE_KEY: 'msg',

  LEVEL_KEY: 'level',

  LEVEL_LABEL: 'levelLabel',

  TIMESTAMP_KEY: 'time',

  LEVELS: {
    default: 'USERLVL',
    60: 'FATAL',
    50: 'ERROR',
    40: 'WARN',
    35: 'EVENT',
    30: 'INFO',
    20: 'DEBUG',
    10: 'TRACE',
    '-10': 'V1',
    '-20': 'V2',
    '-30': 'V3',
    '-40': 'V4',
    '-50': 'V5'
  },

  LEVEL_NAMES: {
    fatal: 60,
    error: 50,
    warn: 40,
    event: 35,
    info: 30,
    debug: 20,
    trace: 10,
    v1: -10,
    v2: -20,
    v3: -30,
    v4: -40,
    v5: -50
  },

  // Object keys that probably came from a logger like Pino or Bunyan.
  LOGGER_KEYS: [
    'pid',
    'hostname',
    'name',
    'level',
    'time',
    'timestamp',
    'caller'
  ]
}
