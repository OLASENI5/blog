import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import MainLayout from '../../components/MainLayout';
import { getUserProfile, updateProfile } from '../../services/index/users';
import ProfilePicture from '../../components/ProfilePicture';
import { toast } from 'react-hot-toast';
import { userActions } from '../../store/reducers/userReducers';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const userState = useSelector(state => state.user);

  // Fetch user profile data
  const { data: profileData, isLoading: profileIsLoading, error: profileError } = useQuery({
    queryFn: () => getUserProfile({ token: userState.userInfo.token }),
    queryKey: ['profile'],
  });

  // Update user profile mutation
  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    mutation: ({ name, email, password }) => {
      return updateProfile({
        token: userState.userInfo.token,
        userData: { name, email, password },
      });
    },
    onSuccess: data => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem('action', JSON.stringify(data));
      queryClient.invalidateQueries(['profile']);
      toast.success('Profile is updated');
    },
    onError: error => {
      toast.error(error.message);
      console.log('Update Profile Error:', error);
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate('/');
    }
  }, [navigate, userState.userInfo]);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    values: {
      name: profileIsLoading ? '' : profileData?.name,
      email: profileIsLoading ? '' : profileData?.email,
    },
    mode: 'onChange',
  });

  const submitHandler = data => {
    const { name, email, password } = data;
    console.log('Form Data:', data);
    mutate({ name, email, password });
  };

  // Log relevant information for debugging
  console.log('userState:', userState);
  console.log('profileData:', profileData);
  console.log('isLoading:', profileIsLoading);
  console.log('updateProfileIsLoading:', updateProfileIsLoading);

  return (
    <MainLayout>
      <section className='container mx-auto px-5 py-10'>
        {profileData && (
          <div className='w-full max-w-sm mx-auto'>
            <ProfilePicture avater={profileData?.avater} />
            <form onSubmit={handleSubmit(submitHandler)}>
              {/* ... (rest of the form) */}
            </form>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default { ProfilePage, getUserProfile };
