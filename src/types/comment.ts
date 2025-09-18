export interface NewComment {
  content?: string;
  sender_id: number;
  attachment?: NewCommentAttachment;
}

export interface NewCommentAttachment {
  name: string;
  file_size: number;
  file_type: string;
  file_url: string;
  uploaded_by: number;
  uploaded_at: Date;
}

export interface TaskAttachment extends NewCommentAttachment {
  comment_id: number;
  attachment_id: number;
}

export interface Comment extends Omit<NewComment, "attachment"> {
  comment_id: number;
  task_id: number;
  created_at: Date;
  profile_picture: string;
  sender_name: string;
  attachment?: TaskAttachment;
}


