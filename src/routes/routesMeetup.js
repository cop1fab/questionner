import express from 'express';
import meetupController from '../controllers/meetup';
import {
  checkMeetup
} from '../Validation/meetupValidation';

const Router = express.Router();

Router.get('/', meetupController.getAll);
Router.post('/', checkMeetup, meetupController.create);
Router.get('/upcoming', meetupController.getUpcoming);
Router.get('/:meetupId', meetupController.getSingle);
Router.post('/:meetupId/rsvps', meetupController.respondRsvp);

export default Router;