/**
 * Created by Ivan on 1/30/2017.
 */

const userController = require('../controllers/user.js');
const neo4jController = require('../controllers/neo4j.js');
const authController = require('../controllers/authentication');
const suggestionController = require('../controllers/suggestion');

const express = require('express');
const router = express.Router();

router.use(authController.authenticate);



router.route('/getnodeswithlabels').post(neo4jController.getNodesByLabels);
router.route('/getnodebyid/:_id').get(neo4jController.getNodeById);

router.route('/createnodesuggestion').post(suggestionController.createNodeSuggestion);
router.route('/createlinksuggestion').post(suggestionController.createLinkSuggestion);

module.exports = router;