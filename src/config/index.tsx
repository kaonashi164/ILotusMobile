/*
Hình ảnh:JPG;JPEG;BMP;PNG
Văn bản: PDF;DOC;DOCX;XLS;XLSX;TXT

Khi đính kèm tập tin không đúng định dạng: "Chỉ hổ trợ tập tin hình ảnh và văn bản: JPG;JPEG;BMP;PNG;PDF;DOC;DOCX;XLS;XLSX;TXT"
Khi muốn xóa tập tin đã đính kèm: "Bạn có chắc muốn xóa tập tin này?"
*/
const MAXIMUM_SIZE_FILE_UPLOAD = 20; // MB

export const config = {
  URL_DOCUMENT: 'http://52.77.249.209:3003',
  BASE_URL_INIT: 'https://dev-api.ilotusland.asia',
  //BASE_URL_INIT :'https://global-api.ilotusland.com'
  BASE_URL_MEDIA: 'http://media.ilotusland.vn',
  BASE_URL_AIRLOTUS: 'https://airlotus-api.ilotusland.com',
  API_GETWAY_QUANGNINH: 'http://113.160.116.59:5000',
  API_CAMERA_QUANGNINH: 'http://113.160.116.59:8081',
  API_MEDIA_QUANGNINH: 'http://113.160.116.59:1234',
  /* 
    Test API with Address : http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyB8Lw-LWcdPxtz01j99UE44V9QUFw9vEO4&size=400x300&sensor=false&markers=622+E+Washington+Street,+Suite+240+Orlando,+FL+32801
    Test API with Lat Lng: http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyB8Lw-LWcdPxtz01j99UE44V9QUFw9vEO4&size=400x300&sensor=false&center=10.8085126,106.7499292
  */
  URL_GOOGLE_STATIC:
    'http://maps.googleapis.com/maps/api/staticmap?sensor=false&',
  API_KEY_MAP_STATIC: 'AIzaSyB8Lw-LWcdPxtz01j99UE44V9QUFw9vEO4',
  // Type Station
  GOOD: 'GOOD',
  EXCEEDED: 'EXCEEDED',
  TEND_TO_EXCEED: 'TEND_TO_EXCEED',
  LOST_CONNECTION: 'LOST_CONNECTION',

  FILE_SUPPORT: {
    default: 'jpg',
    images: ['jpg', 'jpeg', 'bmp', 'png'],
    docs: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'txt'],
    all: [
      'jpg',
      'jpeg',
      'bmp',
      'png',
      'pdf',
      'doc',
      'docx',
      'xls',
      'xlsx',
      'txt',
    ],
  },
  MAXIMUM_FILES_UPLOAD: 15,
  MAXIMUM_SIZE_FILE_UPLOAD: MAXIMUM_SIZE_FILE_UPLOAD,
  MAX_SIZE_A_FILE: MAXIMUM_SIZE_FILE_UPLOAD * 1024 * 1024, //Byte
  TIME_OUT_REQUEST: 1000 * 30, // 30 second,
  TIMEOUT_UPLOAD_FILE: 1000 * 60 * 5, // 60*30 second
  // select
  SELECT_7_DAY: 1,
  SELECT_30_DAY: 2,
  SELECT_ALL_TIME: 3,
  HEIGHT_INPUT_COMBOBOX: 40,

  DATE_PICKER: 'DATE_PICKER',
  TIME_PICKER: 'TIME_PICKER',

  ZOOM_MAP_STATIC: 18,
  WIDTH_DEFAULT_MAP_STATIC: 350,
  HEIGHT_DEFAULT_MAP_STATIC: 150,

  LANGUAGE_DEFAULT: 'vi',
  LANGUAGE_ENGLISH: 'en',
  LANGUAGE_VIETNAM: 'vi',

  //screen tab
  KEY_SCREEN_MAIN: 0,
  KEY_SCREEN_NOTIFY: 1,
  KEY_SCREEN_MAP: 2,

  //Chart
  PAGE_FROM: 1,
  PAGE_LIMIT_CHART_HOUR: 24,
  PAGE_LIMIT: 50,
  TYPE_HOURS: 60,
  TYPE_DAYS: 1440,

  //status take sample
  READY: 'READY',
  TAKE_COMMANDED_SAMPLING: 'TAKE_SAMPLING',
  TAKE_SAMPLING: 'SAMPLING',

  //folder upload
  FOLDER_STATION: 'station',
  TIMELINE: 'timeline',
  USER: 'user',

  //Time interval get Status sampling
  TIME_INTERVAL: 60000,
  MIN_LENGTH_FEEDBACK: 10,

  /*
   *Time Line
   */
  //Feed Group
  FEED_TIMELINE: 'timeline',
  FEED_USER: 'user',
  FEED_NOTIFY: 'notification',
  //Verb Action
  VERB_POST: 'post',
  VERB_LIKE: 'like',
  VERB_HEART: 'heart',
  VERB_COMMENT: 'comment',
  VERB_FOLLOW: 'follow',
  VERB_REPOST: 'repost',
  IS_MENTION: 'mention',
  //User Default
  USER_MONITORING: 'Monitoring',
  URL_MONITORING: 'https://global.ilotusland.com',
  PROFILE_MONITORING: 'https://global.ilotusland.com/images/logo/logo-icon.png',
  USER_GLOBAL: 'global',
  API_KEY: 'jh9aekskdmw8',
  APP_ID: '57187',
  API_SECRET: '1', //f32s5vmer4gfp7jf8vbdhxbtkedggcz2s7kk8ycsnz9cjc5mrg5x82prphfvrs4x
  API_KEY_QUANGNINH: 'p32avbxdh2zg', //  quang ninh hien tai 'yzn8997gksb4', //',
  APP_ID_QUANGNINH: '59988', //'59985',//'',
  ACTIVITY_SAMPLE: {
    foreign_id: '',
    origin: 'user:nghia',
    time: '2019-08-15T14:24:15.233593',
    target: '',
    own_reactions: {
      like: [
        {
          children_counts: {},
          parent: '',
          created_at: '2019-08-15T15:57:40.279495Z',
          data: {},
          activity_id: '5bfd3633-bf68-11e9-8c79-0a286b200b2e',
          user: {
            created_at: '2019-08-14T02:08:48.533213Z',
            updated_at: '2019-08-15T01:48:56.952694Z',
            id: 'nghia3',
            data: {
              desc: 'HJJ',
              name: 'Nghia_User_3',
              nickname: 'nghiaTest',
              profileImage:
                'https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/Accept-Male-User.png',
              url: 'VIET AN',
            },
          },
          user_id: 'nghia3',
          kind: 'like',
          updated_at: '2019-08-15T15:57:40.279495Z',
          latest_children: {},
          id: 'd58a1887-b6dd-4d28-8f24-1b73518a7926',
        },
      ],
    },
    actor: {
      created_at: '2019-08-13T14:24:23.962209Z',
      updated_at: '2019-08-14T17:56:58.258553Z',
      id: 'nghia',
      data: {
        name: 'NGUYEN THANH NGHIA',
        nickname: 'NghiaNguyen1',
        profileImage:
          'https://www.nursingce.com/assets/avatar-34289741f5310ceafc83841a408261a87d2a8898dfded15daf5523e54c3bc9b7.png',
      },
    },
    reaction_counts: {
      like: 1,
    },
    id: '5bfd3633-bf68-11e9-8c79-0a286b200b2e',
    verb: 'post',
    object: 'dddd',
  },
  //TAB router
  TAB_NOTIFY: 1,
  TAB_STATION_LIST: 3,
  TAB_PROFILE: 5,
  TAB_TIMELINE: 7,
  TAB_DETAIL: 9,

  //SignIn TouchId
  TOUCH_ID: 'TouchID',
  FACE_ID: 'FaceID',

  KEY_COLOR_STATION: 'color-station',
  KEY_COLOR_SENSOR: 'color-sensor',
  EMAIL_NOT_EXISTS: 'EMAIL_NOT_EXISTS',
  ZIPCODE_VN: '+84',
  KEY_FAB: 'WASTE_WATER',
  KEY_FAB_1: 'SURFACE_WATER',
  KEY_FAB_2: 'UNDER_WATER',
  KEY_FAB_3: 'KEY_FAB_3',
  KEY_FAB_4: 'STACK_EMISSION',
  KEY_FAB_5: 'AIR_QUALITY',
  KEY_FAB_6: 'KEY_FAB_6',
  KEY_FAB_7: 'KEY_FAB_7',
  KEY_FAB_8: 'KEY_FAB_8',

  KEY_FAB_MONITORING: 'KEY_FAB_MONITORING',
  KEY_FAB_MONITORING_1: 'KEY_FAB_MONITORING_1',
  KEY_FAB_MONITORING_2: 'KEY_FAB_MONITORING_2',
  KEY_FAB_MONITORING_3: 'KEY_FAB_MONITORING_3',
  KEY_FAB_MONITORING_4: 'KEY_FAB_MONITORING_4',
  KEY_FAB_MONITORING_5: 'KEY_FAB_MONITORING_5',
  KEY_FAB_MONITORING_6: 'KEY_FAB_MONITORING_6',
  KEY_FAB_MONITORING_7: 'KEY_FAB_MONITORING_7',

  KEY_FAB_USEFULL: 'KEY_FAB_USEFULL',
  KEY_FAB_USEFUL_1: 'KEY_FAB_USEFUL_1',
  KEY_FAB_USEFUL_2: 'KEY_FAB_USEFUL_2',

  KEY_HOME_RESET: 'main',

  LANGUAGE_VI: 'vi',
  LANGUAGE_EN: 'en',
  DEVICE_TOKEN:
    'dhQQa9HXcBE:APA91bEd86uxYwVaIy2XrZgDzqaKXH9Cj-SL36HYiX9bSab7YwenfDLSGnJhny-33WSzCWkt9I7xHrr_tVosDdC5xM3LHKYGmkEjkvsmo867fA_5_T2he2yzYDRqjVq0J-RebQ9wvWBO',
  WATER: 'WATER',
  AIR: 'AIR',
  TEMP: 'TEMP',
  HUMIDITY: 'HUMIDITY',
  AQI: 'AQI',
  WQI: 'WQI',
  LOCALE_EN: 'en_US',
  LOCALE_VI: 'vi_VN',
  ITEM_DATE_4: '4',
  ITEM_DATE_3: '3',
  ITEM_DATE_2: '2',
  ITEM_DATE_1: '1',

  TYPE_FODER: 'dir',
  TYPE_OTHER: 'type_other',
  TYPE_IMAGE_JPG: 'jpg',
  TYPE_IMAGE_PNR: 'png',
  TYPE_IMAGE_HEIC: 'heic',
  TYPE_XLS: 'xls',
  TYPE_XLSX: 'xlsx',
  TYPE_DOC: 'doc',
  TYPE_DOCX: 'docx',
  TYPE_PDF: 'pdf',
  //Mine File
  MINE_PDF: 'pdf',
  MINE_DOC: 'doc',
  MINE_DOC_X: 'docx',
  MINE_EXEL: 'xls',
  MINE_EXEL_X: 'xlsx',
  //notify
  KEY_FOLDER: 'KEY_FOLDER',
  KEY_CAMERA: 'KEY_CAMERA',
  KEY_LIB: 'KEY_LIB',
  KEY_DRIVER: 'KEY_DRIVER',
  KEY_FILE: 'KEY_FILE',
  KEY_SHARE: 'KEY_SHARE',
  KEY_DELETE: 'KEY_DELETE',
  APP_NAME: 'AirLotus',
  REACTTION_LIKE: 'LIKE',
  REACTTION_COMMENT: 'COMMENT',
  REACTTION_COMMENT_CHILD: 'COMMENT_CHILD',
  REACTTION_HEART: 'HEART',
  REACTTION_STATUS_ON: 'ON',
  REACTTION_STATUS_OFF: 'OFF',
  TAB_EXPAND_STATION: 'TAB_EXPAND_STATION',
  TAB_EXPAND_FOLDER: 'TAB_EXPAND_FOLDER',
  TAB_EXPAND_TASK: 'TAB_EXPAND_TASK',
  TAB_EXPAND_AQI: 'TAB_EXPAND_AQI',
  TAB_EXPAND_REPORT: 'TAB_EXPAND_REPORT',
  TAB_EXPAND_URL: 'TAB_EXPAND_URL',
  pollutants:
    'https://public-cms-hanoi.ilotusland.asia/vi/category/Mang-luoi-quan-trac-moi-truong-vgNL7',
  pollutants_en:
    'https://public-cms-hanoi.ilotusland.asia/en/category/Environmental-monitoring-network-XfZMr',
};
