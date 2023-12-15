import { useState } from 'react';
import Cropper from 'react-easy-crop';

import getCroppedImg from './cropImage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfilePicture } from '../../services/index/users';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/reducers/userReducers';
import { toast } from 'react-hot-toast';

const CropEasy = ({ photo, setOpenCrop }) => {
  const userState = useSelector(state => state.user);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const { mutate, isLoading } = useMutation({
    mutation: ({ token, formData }) => {
      return updateProfilePicture({
        token: token,
        formData: formData,
      });
    },
    onSuccess: data => {
      dispatch(userActions.setUserInfo(data));
      setOpenCrop(false);
      localStorage.setItem('account', JSON.stringify(data));
      queryClient.invalidateQueries(['profile']);
      toast.success('Profile photo is updated');
    },
    onError: error => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCropImage = async () => {
    try {
      const croppedImg = await getCroppedImg(photo?.url, croppedAreaPixels);

      const file = new File([croppedImg.file], `${photo?.file?.name}`, {
        type: photo?.file?.type,
      });

      const formData = new FormData();
      formData.append('profilePicture', file);

      mutate({ token: userState.userInfo.token, formData: formData });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className='fixed z-[1000] inset-0 bg-black/50 flex justify-center p-5 overflow-auto'>
      <div className='bg-white h-fit w-full sm:max-w-[350px] p-5 rounded-lg'>
        {/* ... rest of the component */}
      </div>
    </div>
  );
};

export default CropEasy;
