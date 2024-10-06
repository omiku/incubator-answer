/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { useTranslation } from 'react-i18next';

import { CardBadge } from '@/components';
import { usePageTags } from '@/hooks';
import { useGetAllBadges } from '@/services';

const Index = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'badges' });

  const { data: badgesList } = useGetAllBadges();

  usePageTags({
    title: t('title'),
  });

  return (
    <div className="pt-4 mb-5">
      <h3 className="mb-4">{t('title')}</h3>
      {badgesList?.map((item) => {
        return (
          <div key={item.group_name} className="mb-5">
            <h5 className="mb-4">{item.group_name}</h5>
            <div className="d-flex flex-wrap" style={{ margin: '-12px' }}>
              {item.badges?.map((badge) => {
                return (
                  <CardBadge data={badge} key={badge.id} showAwardedCount />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
