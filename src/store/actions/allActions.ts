import { getAlertActions } from './alertActions';
import { getAuthActions } from './authActions';
import { getChatActions } from './chatActions';
import { getFriendsActions } from './friendsActions';
import { getRoomActions } from './roomActions';

const allActions = {
  ...getAuthActions(),
  ...getAlertActions(),
  ...getFriendsActions(),
  ...getChatActions(),
  ...getRoomActions(),
}

export default allActions;