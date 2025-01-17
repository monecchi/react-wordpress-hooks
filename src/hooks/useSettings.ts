import { useApiRequest } from './useApiRequest';

type UseUpdateSettings = {
  readonly title?: string;
  readonly description?: string;
  readonly timezone?: string;
  readonly date_format?: string;
  readonly time_format?: string;
  readonly start_of_week?: number;
  readonly language?: string;
  readonly use_smilies?: boolean;
  readonly default_category?: number;
  readonly default_post_format?: string;
  readonly posts_per_page?: number;
  readonly default_ping_status?: 'open' | 'closed';
  readonly default_comment_status?: 'open' | 'closed';
};

const endpoint = 'settings';

export const useSettings = () => {
  const { data, loading, error } = useApiRequest({ endpoint });

  return { data, loading, error };
};

export const useUpdateSetting = (options: UseUpdateSettings) => {
  const { data, loading, error } = useApiRequest({
    options,
    endpoint,
    requsetMethod: 'post',
  });

  return { data, loading, error };
};
