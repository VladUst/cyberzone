export type { User, UserSchema } from './model/types/user';
export { userReducer, userActions } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited';
export { UserRole } from './model/consts/consts';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';
