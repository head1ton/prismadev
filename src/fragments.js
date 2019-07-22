export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment {
        id
        text
        user {
            username
            id
        }
    }
`;

// export const USER_FRAGEMENT = `
//     fragment UserParts on User {
//         id
//         username
//         email
//         firstName
//         lastName
//         bio
//         posts {
//             id
//             caption
//         }
//     }
// `;