export default interface User {
  _id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  age?: string;
  gender?: string;
  isEditable?: boolean;
  isEditLoading?: boolean;
  isDeleteLoading?: boolean;
}
