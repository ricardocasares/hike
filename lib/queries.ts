export const POST_QUERY = `query($id:Int!, $owner:String!, $name:String!) {
  repository(owner: $owner, name: $name) {
    issue(number:$id) {
      id,
      title,
      body
    }
  }
}`;

export const POSTS_QUERY = `query($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    issues(last: 20, states: OPEN) {
      nodes {
        number,
        title,
        createdAt,
        comments {
          totalCount
        }
        labels(first: 5) {
          nodes {
            name,
            color
          }
        }
      }
    }
  }
}`;
