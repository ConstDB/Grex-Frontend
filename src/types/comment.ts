export interface NewComment {
  content?: string;
  sender_id: number;
  attachments?: NewCommentAttachment;
}

export interface NewCommentAttachment {
  name: string;
  file_size: number;
  file_type: string;
  file_url: string;
}

export interface TaskAttachment extends NewCommentAttachment {
  comment_id: number;
  comment_attachment_id: number;
}

export interface Comment extends Omit<NewComment, "attachment"> {
  comment_id: number;
  task_id: number;
  created_at: Date;
  profile_picture: string;
  sender_name: string;
  attachments?: TaskAttachment; // multiple attachment in a comment isn't allowed. Suggest to change this from attachments -> attachment
}
