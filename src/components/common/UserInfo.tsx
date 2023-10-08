import { CustomInstructionsForm } from 'components';

export default function UserInfo() {
    return (
      <div className="hidden">
        {/*
        TODO: Create Three dot button component menu with:
            - User Name
            - User Avatar/Icon
            - Three dot button to open sub menu with:
                - Logout button
                - Settings button
                - Help/FAQ button
                - Custom Instructions button toggles form
        */}
        <CustomInstructionsForm />
      </div>
    );
}
