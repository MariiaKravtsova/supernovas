/**
 * MainAPI.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {
     sn : {
         type : 'string'
     },
     host : {
         type : 'string'
     },
     galaxy : {
         type : 'string'
     },
     date : {
         type : 'string'
     },
     ra : {
         type : 'string'
     },
     decl : {
         type : 'string'
     },
     offset : {
         type : 'string'
     },
     mag : {
         type : 'string'
     },
     disk : {
         type : 'string'
     },
     sn_position : {
         type : 'string'
     },
     type : {
         type : 'string'
     },
     Discoverer : {
         type : 'string'
     }
   }
 };
