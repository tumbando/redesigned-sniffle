import $ from 'jquery';
import Backbone from 'backbone';

import blogSaver from './views/blogSaver';
import savePerson from './views/personSaver';
import router from './router';

blogSaver();//<---don't forget to call the function!!!
savePerson();
Backbone.history.start();
