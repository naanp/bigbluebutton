import Shapes from '/imports/api/2.0/shapes';
import Logger from '/imports/startup/server/logger';

export default function clearShapes(meetingId) {
  if (meetingId) {
    return Shapes.remove({ meetingId }, Logger.info(`Cleared Shapes (${meetingId})`));
  }

  return Shapes.remove({}, Logger.info('Cleared Shapes (all)'));
}
