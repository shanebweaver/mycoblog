/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","e4b01b84d34d6e3dbe537376d03cc4ee"],["/about/index.html","9e931f0109ac8bea8307a0a82449319d"],["/assets/css/main.css","b0625569eeae224f9b975dd7a4ab1478"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","46d089384d19077a7990aa13bbb16643"],["/assets/img/icons/icon-instagram.svg","386f48e7440160096385614b2ec91930"],["/assets/img/icons/icon-twitter.svg","d2508d22e42c11e177ae430d33b343d9"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","5aa56ac96362cc1bb12c2848a6b6c1b7"],["/assets/img/posts/about.jpg","762b3459f34a245250eb65bee4fb5d35"],["/assets/img/posts/about_lg.jpg","762b3459f34a245250eb65bee4fb5d35"],["/assets/img/posts/about_md.jpg","762b3459f34a245250eb65bee4fb5d35"],["/assets/img/posts/about_placehold.jpg","5b6a28df457a0f04a5ac37dda8ed78e5"],["/assets/img/posts/about_sm.jpg","762b3459f34a245250eb65bee4fb5d35"],["/assets/img/posts/about_thumb.jpg","762b3459f34a245250eb65bee4fb5d35"],["/assets/img/posts/about_thumb@2x.jpg","762b3459f34a245250eb65bee4fb5d35"],["/assets/img/posts/about_xs.jpg","762b3459f34a245250eb65bee4fb5d35"],["/assets/img/posts/controls.jpg","427e9273a47a9da0f702d312ac9a773a"],["/assets/img/posts/controls_lg.jpg","427e9273a47a9da0f702d312ac9a773a"],["/assets/img/posts/controls_md.jpg","427e9273a47a9da0f702d312ac9a773a"],["/assets/img/posts/controls_placehold.jpg","1fb7a917a5784d8a954bc8ad57159203"],["/assets/img/posts/controls_sm.jpg","427e9273a47a9da0f702d312ac9a773a"],["/assets/img/posts/controls_thumb.jpg","427e9273a47a9da0f702d312ac9a773a"],["/assets/img/posts/controls_thumb@2x.jpg","427e9273a47a9da0f702d312ac9a773a"],["/assets/img/posts/controls_xs.jpg","427e9273a47a9da0f702d312ac9a773a"],["/assets/img/posts/exhaust_fan.jpg","677a926f104cc6985a1f63959ab6d3f1"],["/assets/img/posts/exhaust_fan_lg.jpg","677a926f104cc6985a1f63959ab6d3f1"],["/assets/img/posts/exhaust_fan_md.jpg","677a926f104cc6985a1f63959ab6d3f1"],["/assets/img/posts/exhaust_fan_placehold.jpg","8a5b65158aea5bf22eb6a07310dd6b94"],["/assets/img/posts/exhaust_fan_sm.jpg","677a926f104cc6985a1f63959ab6d3f1"],["/assets/img/posts/exhaust_fan_thumb.jpg","677a926f104cc6985a1f63959ab6d3f1"],["/assets/img/posts/exhaust_fan_thumb@2x.jpg","677a926f104cc6985a1f63959ab6d3f1"],["/assets/img/posts/exhaust_fan_xs.jpg","677a926f104cc6985a1f63959ab6d3f1"],["/assets/img/posts/exhaust_fixture.jpg","6aeaa8f4df9cab088f8c10d149beedf5"],["/assets/img/posts/exhaust_fixture_lg.jpg","6aeaa8f4df9cab088f8c10d149beedf5"],["/assets/img/posts/exhaust_fixture_md.jpg","6aeaa8f4df9cab088f8c10d149beedf5"],["/assets/img/posts/exhaust_fixture_placehold.jpg","eb3e6e7fd4723e8569100a2947083031"],["/assets/img/posts/exhaust_fixture_sm.jpg","6aeaa8f4df9cab088f8c10d149beedf5"],["/assets/img/posts/exhaust_fixture_thumb.jpg","6aeaa8f4df9cab088f8c10d149beedf5"],["/assets/img/posts/exhaust_fixture_thumb@2x.jpg","6aeaa8f4df9cab088f8c10d149beedf5"],["/assets/img/posts/exhaust_fixture_xs.jpg","6aeaa8f4df9cab088f8c10d149beedf5"],["/assets/img/posts/exhaust_tubing.jpg","bd7fbbda1a7077b8642129bc423fc04b"],["/assets/img/posts/exhaust_tubing_lg.jpg","bd7fbbda1a7077b8642129bc423fc04b"],["/assets/img/posts/exhaust_tubing_md.jpg","bd7fbbda1a7077b8642129bc423fc04b"],["/assets/img/posts/exhaust_tubing_placehold.jpg","7637f8f4df4572b6d939bce352e0bf85"],["/assets/img/posts/exhaust_tubing_sm.jpg","bd7fbbda1a7077b8642129bc423fc04b"],["/assets/img/posts/exhaust_tubing_thumb.jpg","bd7fbbda1a7077b8642129bc423fc04b"],["/assets/img/posts/exhaust_tubing_thumb@2x.jpg","bd7fbbda1a7077b8642129bc423fc04b"],["/assets/img/posts/exhaust_tubing_xs.jpg","bd7fbbda1a7077b8642129bc423fc04b"],["/assets/img/posts/flange_1.jpg","0c61351e9149575e8b728f1276f4997f"],["/assets/img/posts/flange_1_lg.jpg","0c61351e9149575e8b728f1276f4997f"],["/assets/img/posts/flange_1_md.jpg","0c61351e9149575e8b728f1276f4997f"],["/assets/img/posts/flange_1_placehold.jpg","2dcee9abfbc00586b7c477558703ecc4"],["/assets/img/posts/flange_1_sm.jpg","0c61351e9149575e8b728f1276f4997f"],["/assets/img/posts/flange_1_thumb.jpg","0c61351e9149575e8b728f1276f4997f"],["/assets/img/posts/flange_1_thumb@2x.jpg","0c61351e9149575e8b728f1276f4997f"],["/assets/img/posts/flange_1_xs.jpg","0c61351e9149575e8b728f1276f4997f"],["/assets/img/posts/flange_2.jpg","5133a00a5ee645ef830829674976d768"],["/assets/img/posts/flange_2_lg.jpg","5133a00a5ee645ef830829674976d768"],["/assets/img/posts/flange_2_md.jpg","5133a00a5ee645ef830829674976d768"],["/assets/img/posts/flange_2_placehold.jpg","5aa7d598e0e4c9fd43a3c168f52616d5"],["/assets/img/posts/flange_2_sm.jpg","5133a00a5ee645ef830829674976d768"],["/assets/img/posts/flange_2_thumb.jpg","5133a00a5ee645ef830829674976d768"],["/assets/img/posts/flange_2_thumb@2x.jpg","5133a00a5ee645ef830829674976d768"],["/assets/img/posts/flange_2_xs.jpg","5133a00a5ee645ef830829674976d768"],["/assets/img/posts/heatmat.jpg","74061054a9b6018b4e111a454a5ca62a"],["/assets/img/posts/heatmat_lg.jpg","74061054a9b6018b4e111a454a5ca62a"],["/assets/img/posts/heatmat_md.jpg","74061054a9b6018b4e111a454a5ca62a"],["/assets/img/posts/heatmat_placehold.jpg","a3bd60178875cebaa7ee0e6b85f12837"],["/assets/img/posts/heatmat_sm.jpg","74061054a9b6018b4e111a454a5ca62a"],["/assets/img/posts/heatmat_thumb.jpg","74061054a9b6018b4e111a454a5ca62a"],["/assets/img/posts/heatmat_thumb@2x.jpg","74061054a9b6018b4e111a454a5ca62a"],["/assets/img/posts/heatmat_xs.jpg","74061054a9b6018b4e111a454a5ca62a"],["/assets/img/posts/humidifier_connected.jpg","1cd396c2bb7400a207f9074d30acd74e"],["/assets/img/posts/humidifier_connected_lg.jpg","1cd396c2bb7400a207f9074d30acd74e"],["/assets/img/posts/humidifier_connected_md.jpg","1cd396c2bb7400a207f9074d30acd74e"],["/assets/img/posts/humidifier_connected_placehold.jpg","c435cc0b9569690a98a66bd31d558864"],["/assets/img/posts/humidifier_connected_sm.jpg","1cd396c2bb7400a207f9074d30acd74e"],["/assets/img/posts/humidifier_connected_thumb.jpg","1cd396c2bb7400a207f9074d30acd74e"],["/assets/img/posts/humidifier_connected_thumb@2x.jpg","1cd396c2bb7400a207f9074d30acd74e"],["/assets/img/posts/humidifier_connected_xs.jpg","1cd396c2bb7400a207f9074d30acd74e"],["/assets/img/posts/humidifier_disconnected.jpg","1b79b054e1c1610e69fc979e2709a128"],["/assets/img/posts/humidifier_disconnected_lg.jpg","1b79b054e1c1610e69fc979e2709a128"],["/assets/img/posts/humidifier_disconnected_md.jpg","1b79b054e1c1610e69fc979e2709a128"],["/assets/img/posts/humidifier_disconnected_placehold.jpg","54ed0c2d684a31671d8512abaf221ca4"],["/assets/img/posts/humidifier_disconnected_sm.jpg","1b79b054e1c1610e69fc979e2709a128"],["/assets/img/posts/humidifier_disconnected_thumb.jpg","1b79b054e1c1610e69fc979e2709a128"],["/assets/img/posts/humidifier_disconnected_thumb@2x.jpg","1b79b054e1c1610e69fc979e2709a128"],["/assets/img/posts/humidifier_disconnected_xs.jpg","1b79b054e1c1610e69fc979e2709a128"],["/assets/img/posts/humidifier_open.jpg","c5b9300917177509608d95fc20a5b8c0"],["/assets/img/posts/humidifier_open_lg.jpg","c5b9300917177509608d95fc20a5b8c0"],["/assets/img/posts/humidifier_open_md.jpg","c5b9300917177509608d95fc20a5b8c0"],["/assets/img/posts/humidifier_open_placehold.jpg","5f8bcde2bc72cdc6450c93a633474201"],["/assets/img/posts/humidifier_open_sm.jpg","c5b9300917177509608d95fc20a5b8c0"],["/assets/img/posts/humidifier_open_thumb.jpg","c5b9300917177509608d95fc20a5b8c0"],["/assets/img/posts/humidifier_open_thumb@2x.jpg","c5b9300917177509608d95fc20a5b8c0"],["/assets/img/posts/humidifier_open_xs.jpg","c5b9300917177509608d95fc20a5b8c0"],["/assets/img/posts/humidifier_top.jpg","5a70df444fadd349c6b79b2d3f25f514"],["/assets/img/posts/humidifier_top_lg.jpg","5a70df444fadd349c6b79b2d3f25f514"],["/assets/img/posts/humidifier_top_md.jpg","5a70df444fadd349c6b79b2d3f25f514"],["/assets/img/posts/humidifier_top_placehold.jpg","6544548b45fc0c6e221ec299bf257647"],["/assets/img/posts/humidifier_top_sm.jpg","5a70df444fadd349c6b79b2d3f25f514"],["/assets/img/posts/humidifier_top_thumb.jpg","5a70df444fadd349c6b79b2d3f25f514"],["/assets/img/posts/humidifier_top_thumb@2x.jpg","5a70df444fadd349c6b79b2d3f25f514"],["/assets/img/posts/humidifier_top_xs.jpg","5a70df444fadd349c6b79b2d3f25f514"],["/assets/img/posts/humidifier_tubing.jpg","6e42dc373b5f51f62f92ae2d62fbc988"],["/assets/img/posts/humidifier_tubing_lg.jpg","6e42dc373b5f51f62f92ae2d62fbc988"],["/assets/img/posts/humidifier_tubing_md.jpg","6e42dc373b5f51f62f92ae2d62fbc988"],["/assets/img/posts/humidifier_tubing_placehold.jpg","94716ee1ef4b96db0af9e2da672b475b"],["/assets/img/posts/humidifier_tubing_sm.jpg","6e42dc373b5f51f62f92ae2d62fbc988"],["/assets/img/posts/humidifier_tubing_thumb.jpg","6e42dc373b5f51f62f92ae2d62fbc988"],["/assets/img/posts/humidifier_tubing_thumb@2x.jpg","6e42dc373b5f51f62f92ae2d62fbc988"],["/assets/img/posts/humidifier_tubing_xs.jpg","6e42dc373b5f51f62f92ae2d62fbc988"],["/assets/img/posts/humidifier_working.jpg","ebf360f963e2f1e6df921f6c22e868d3"],["/assets/img/posts/humidifier_working_lg.jpg","ebf360f963e2f1e6df921f6c22e868d3"],["/assets/img/posts/humidifier_working_md.jpg","ebf360f963e2f1e6df921f6c22e868d3"],["/assets/img/posts/humidifier_working_placehold.jpg","fd467033412265dca2e9c35e5f6da341"],["/assets/img/posts/humidifier_working_sm.jpg","ebf360f963e2f1e6df921f6c22e868d3"],["/assets/img/posts/humidifier_working_thumb.jpg","ebf360f963e2f1e6df921f6c22e868d3"],["/assets/img/posts/humidifier_working_thumb@2x.jpg","ebf360f963e2f1e6df921f6c22e868d3"],["/assets/img/posts/humidifier_working_xs.jpg","ebf360f963e2f1e6df921f6c22e868d3"],["/assets/img/posts/light_1.jpg","f2a21c37cbd52c9f1c9129dc2b7a9f84"],["/assets/img/posts/light_1_lg.jpg","f2a21c37cbd52c9f1c9129dc2b7a9f84"],["/assets/img/posts/light_1_md.jpg","f2a21c37cbd52c9f1c9129dc2b7a9f84"],["/assets/img/posts/light_1_placehold.jpg","b363dbfbbbed0e5287754cc2119f2f8c"],["/assets/img/posts/light_1_sm.jpg","f2a21c37cbd52c9f1c9129dc2b7a9f84"],["/assets/img/posts/light_1_thumb.jpg","f2a21c37cbd52c9f1c9129dc2b7a9f84"],["/assets/img/posts/light_1_thumb@2x.jpg","f2a21c37cbd52c9f1c9129dc2b7a9f84"],["/assets/img/posts/light_1_xs.jpg","f2a21c37cbd52c9f1c9129dc2b7a9f84"],["/assets/img/posts/light_2.jpg","b864d15627be18e1f2580ae616a9a83f"],["/assets/img/posts/light_2_lg.jpg","b864d15627be18e1f2580ae616a9a83f"],["/assets/img/posts/light_2_md.jpg","b864d15627be18e1f2580ae616a9a83f"],["/assets/img/posts/light_2_placehold.jpg","845a8bf868a73268e4913c8156a8e201"],["/assets/img/posts/light_2_sm.jpg","b864d15627be18e1f2580ae616a9a83f"],["/assets/img/posts/light_2_thumb.jpg","b864d15627be18e1f2580ae616a9a83f"],["/assets/img/posts/light_2_thumb@2x.jpg","b864d15627be18e1f2580ae616a9a83f"],["/assets/img/posts/light_2_xs.jpg","b864d15627be18e1f2580ae616a9a83f"],["/assets/img/posts/mist_1.jpg","27ddddc99ffe297f5149ab7727119201"],["/assets/img/posts/mist_1_lg.jpg","27ddddc99ffe297f5149ab7727119201"],["/assets/img/posts/mist_1_md.jpg","27ddddc99ffe297f5149ab7727119201"],["/assets/img/posts/mist_1_placehold.jpg","fc0a0fb53798d6406883816d3d6c3b23"],["/assets/img/posts/mist_1_sm.jpg","27ddddc99ffe297f5149ab7727119201"],["/assets/img/posts/mist_1_thumb.jpg","27ddddc99ffe297f5149ab7727119201"],["/assets/img/posts/mist_1_thumb@2x.jpg","27ddddc99ffe297f5149ab7727119201"],["/assets/img/posts/mist_1_xs.jpg","27ddddc99ffe297f5149ab7727119201"],["/assets/img/posts/mist_2.jpg","f486c2c16e37118205e769000855f920"],["/assets/img/posts/mist_2_lg.jpg","f486c2c16e37118205e769000855f920"],["/assets/img/posts/mist_2_md.jpg","f486c2c16e37118205e769000855f920"],["/assets/img/posts/mist_2_placehold.jpg","eccc482622f0a84b1513c4723ca75dcd"],["/assets/img/posts/mist_2_sm.jpg","f486c2c16e37118205e769000855f920"],["/assets/img/posts/mist_2_thumb.jpg","f486c2c16e37118205e769000855f920"],["/assets/img/posts/mist_2_thumb@2x.jpg","f486c2c16e37118205e769000855f920"],["/assets/img/posts/mist_2_xs.jpg","f486c2c16e37118205e769000855f920"],["/assets/img/posts/mist_3.jpg","be37032d0100bade0a0c46150b3f7f45"],["/assets/img/posts/mist_3_lg.jpg","be37032d0100bade0a0c46150b3f7f45"],["/assets/img/posts/mist_3_md.jpg","be37032d0100bade0a0c46150b3f7f45"],["/assets/img/posts/mist_3_placehold.jpg","9288ceaba2c806b0edc3fbda95d6b3ba"],["/assets/img/posts/mist_3_sm.jpg","be37032d0100bade0a0c46150b3f7f45"],["/assets/img/posts/mist_3_thumb.jpg","be37032d0100bade0a0c46150b3f7f45"],["/assets/img/posts/mist_3_thumb@2x.jpg","be37032d0100bade0a0c46150b3f7f45"],["/assets/img/posts/mist_3_xs.jpg","be37032d0100bade0a0c46150b3f7f45"],["/assets/img/posts/mist_4.jpg","7202155d1f571bb0e7e654320f8dde35"],["/assets/img/posts/mist_4_lg.jpg","7202155d1f571bb0e7e654320f8dde35"],["/assets/img/posts/mist_4_md.jpg","7202155d1f571bb0e7e654320f8dde35"],["/assets/img/posts/mist_4_placehold.jpg","3e6f8f1ae20a9ab8bbc21365800afe0d"],["/assets/img/posts/mist_4_sm.jpg","7202155d1f571bb0e7e654320f8dde35"],["/assets/img/posts/mist_4_thumb.jpg","7202155d1f571bb0e7e654320f8dde35"],["/assets/img/posts/mist_4_thumb@2x.jpg","7202155d1f571bb0e7e654320f8dde35"],["/assets/img/posts/mist_4_xs.jpg","7202155d1f571bb0e7e654320f8dde35"],["/assets/img/posts/oyster_1.jpg","7d7fdb4191555e754ad82288d189ca64"],["/assets/img/posts/oyster_1_lg.jpg","7d7fdb4191555e754ad82288d189ca64"],["/assets/img/posts/oyster_1_md.jpg","7d7fdb4191555e754ad82288d189ca64"],["/assets/img/posts/oyster_1_placehold.jpg","d255824998bc0de585ef0f86402799b2"],["/assets/img/posts/oyster_1_sm.jpg","7d7fdb4191555e754ad82288d189ca64"],["/assets/img/posts/oyster_1_thumb.jpg","7d7fdb4191555e754ad82288d189ca64"],["/assets/img/posts/oyster_1_thumb@2x.jpg","7d7fdb4191555e754ad82288d189ca64"],["/assets/img/posts/oyster_1_xs.jpg","7d7fdb4191555e754ad82288d189ca64"],["/assets/img/posts/oyster_2.jpg","95d6d10efc0639bdb340fa2c6d3c3ad9"],["/assets/img/posts/oyster_2_lg.jpg","95d6d10efc0639bdb340fa2c6d3c3ad9"],["/assets/img/posts/oyster_2_md.jpg","95d6d10efc0639bdb340fa2c6d3c3ad9"],["/assets/img/posts/oyster_2_placehold.jpg","7f62265fc651ac3d4c13fcfc8f1f9000"],["/assets/img/posts/oyster_2_sm.jpg","95d6d10efc0639bdb340fa2c6d3c3ad9"],["/assets/img/posts/oyster_2_thumb.jpg","95d6d10efc0639bdb340fa2c6d3c3ad9"],["/assets/img/posts/oyster_2_thumb@2x.jpg","95d6d10efc0639bdb340fa2c6d3c3ad9"],["/assets/img/posts/oyster_2_xs.jpg","95d6d10efc0639bdb340fa2c6d3c3ad9"],["/assets/img/posts/perlite.jpg","c4bdd0657b88f1a20f2f8fe71c08deec"],["/assets/img/posts/perlite_lg.jpg","c4bdd0657b88f1a20f2f8fe71c08deec"],["/assets/img/posts/perlite_md.jpg","c4bdd0657b88f1a20f2f8fe71c08deec"],["/assets/img/posts/perlite_placehold.jpg","89bc7dd767ac23e60d3ad1299497c232"],["/assets/img/posts/perlite_sm.jpg","c4bdd0657b88f1a20f2f8fe71c08deec"],["/assets/img/posts/perlite_thumb.jpg","c4bdd0657b88f1a20f2f8fe71c08deec"],["/assets/img/posts/perlite_thumb@2x.jpg","c4bdd0657b88f1a20f2f8fe71c08deec"],["/assets/img/posts/perlite_xs.jpg","c4bdd0657b88f1a20f2f8fe71c08deec"],["/assets/img/posts/sensors.jpg","5ec851618da52dafba6660059f09ba58"],["/assets/img/posts/sensors_lg.jpg","5ec851618da52dafba6660059f09ba58"],["/assets/img/posts/sensors_md.jpg","5ec851618da52dafba6660059f09ba58"],["/assets/img/posts/sensors_placehold.jpg","cec71264af438e09be917eb00dc442be"],["/assets/img/posts/sensors_sm.jpg","5ec851618da52dafba6660059f09ba58"],["/assets/img/posts/sensors_thumb.jpg","5ec851618da52dafba6660059f09ba58"],["/assets/img/posts/sensors_thumb@2x.jpg","5ec851618da52dafba6660059f09ba58"],["/assets/img/posts/sensors_xs.jpg","5ec851618da52dafba6660059f09ba58"],["/assets/img/posts/tent_1.jpg","646229642372ca280bcadeb224cc4763"],["/assets/img/posts/tent_1_lg.jpg","646229642372ca280bcadeb224cc4763"],["/assets/img/posts/tent_1_md.jpg","646229642372ca280bcadeb224cc4763"],["/assets/img/posts/tent_1_placehold.jpg","e2f10c6d60fac6fcd17f9a4c513664a2"],["/assets/img/posts/tent_1_sm.jpg","646229642372ca280bcadeb224cc4763"],["/assets/img/posts/tent_1_thumb.jpg","646229642372ca280bcadeb224cc4763"],["/assets/img/posts/tent_1_thumb@2x.jpg","646229642372ca280bcadeb224cc4763"],["/assets/img/posts/tent_1_xs.jpg","646229642372ca280bcadeb224cc4763"],["/assets/img/posts/tent_2.jpg","a325245779511c38a6175f5d9d165a82"],["/assets/img/posts/tent_2_lg.jpg","a325245779511c38a6175f5d9d165a82"],["/assets/img/posts/tent_2_md.jpg","a325245779511c38a6175f5d9d165a82"],["/assets/img/posts/tent_2_placehold.jpg","8692ca2b7c6e94da4c0ad8fdbae39fea"],["/assets/img/posts/tent_2_sm.jpg","a325245779511c38a6175f5d9d165a82"],["/assets/img/posts/tent_2_thumb.jpg","a325245779511c38a6175f5d9d165a82"],["/assets/img/posts/tent_2_thumb@2x.jpg","a325245779511c38a6175f5d9d165a82"],["/assets/img/posts/tent_2_xs.jpg","a325245779511c38a6175f5d9d165a82"],["/assets/img/posts/various.jpg","4af75869e0d57922b3c10d01af05aa1a"],["/assets/img/posts/various_lg.jpg","f704c93c25ed69d327e1c66b9951e893"],["/assets/img/posts/various_md.jpg","6b663635f17c9f497f64cd59137d681b"],["/assets/img/posts/various_placehold.jpg","04e8c00bca8157f5ec442b81c9da12f8"],["/assets/img/posts/various_sm.jpg","a4bdacb3743953a34338e19afed22623"],["/assets/img/posts/various_thumb.jpg","076be8502ef96805bb49095527028e55"],["/assets/img/posts/various_thumb@2x.jpg","bd0e3d598e88e70217538fa56895e77a"],["/assets/img/posts/various_xs.jpg","7899dfd1430fafd970f49ad9ad73c664"],["/assets/js/bundle.js","35f40c3e18a7da2df473924fc6454a7a"],["/categories/index.html","9db41e1b49275e373301e46abae987b1"],["/contact/index.html","c9e7ceac356fe4a80a2ab01a95926d5a"],["/gulpfile.babel.js","ba574e684a98c057124180f52c991019"],["/index.html","d123de10328cc152f8a44ea98502d760"],["/martha-build/index.html","2dbadf2797bd644d01330d7d3d77eba8"],["/martha-clean/index.html","ac5f46b48ea8c7343110e880655b627b"],["/martha-configure/index.html","7e8957fb637af8d25efb385112bd0998"],["/martha-next/index.html","2ea3bb3c5e5e794d480917c174225f81"],["/sw.js","dafe29d62ebd1f8590f29bad2a4e6922"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







