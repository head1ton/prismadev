export const USER_FRAGEMENT = `
    fragment UserParts on User {
        id
        username
        email
        firstName
        lastName
        bio
        posts {
            id
            caption
        }
    }
`;