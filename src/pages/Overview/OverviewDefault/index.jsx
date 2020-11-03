import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin,Row, Col, Divider } from 'antd';
import { FormattedMessage } from 'umi';
import styles from './index.less';
export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (   
    <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <div
        style={{
          margingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      
        <FormattedMessage id="overView.lang" />
      </div>
     
    </PageContainer>

  );
};
