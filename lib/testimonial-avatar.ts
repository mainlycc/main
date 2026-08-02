export const DEFAULT_TESTIMONIAL_AVATAR = "/avatars/default.png";

export function resolveTestimonialAvatar(avatar?: string | null): string {
  if (!avatar || !avatar.trim()) return DEFAULT_TESTIMONIAL_AVATAR;
  return avatar;
}
