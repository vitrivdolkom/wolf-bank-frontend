import { Role } from '@/generated/api/models';

export const getRoleBadgeClass = (role?: Role) => {
  switch (role) {
    case Role.NUMBER_0:
      return 'badge-primary';
    case Role.NUMBER_1:
      return 'badge-secondary';
    case Role.NUMBER_2:
      return 'badge-accent';
    default:
      return 'badge-ghost';
  }
};
