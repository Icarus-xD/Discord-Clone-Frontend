import { FC, useState } from 'react';
import CustomPrimaryButton from '../../shared/CustomPrimaryButton';
import CSS from 'csstype';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles: CSS.Properties = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  backgroundColor: '#3BA55D',
};

const AddFriendButton: FC = () => {

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        label='Add Friend'
        additionalStyles={additionalStyles} 
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog 
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;