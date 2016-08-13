/**
 * Supernovas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {
     sn: {
           type: 'string',
           primaryKey: true
         },
     suphost: {
       type: 'string'
     },
     galaxy: {
           type: 'string'
         },
     date: {
           type: 'string'
         },
     ra: {
           type: 'string'
         },
     mag: {
           type: 'string'
         },
     position: {
           type: 'string'
         },
     suptype: {
           type: 'string'
         },
     discoverer: {
           type: 'string'
         }
   }
 };
