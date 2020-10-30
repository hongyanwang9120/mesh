// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              name: 'login',
              icon: 'smile', 
              path: '/user/login',
              component: './user/UserLogin',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
    
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/overview',
            },
            // 概览
            {
              name: 'overview',
              icon: 'smile',
              path: '/overview',
              component: './Overview/OverviewDefault',
            },
            // 用户管理
            {
              path: '/userManagement',
              name: 'userManagement',
              icon: 'dashboard',
              routes: [
                {
                  path: '/',
                  redirect: '/userManagement/userManagementDefault',
                },
                {
                  name: 'log',
                  icon: 'smile',
                  path: '/userManagement/log',
                  component: './UserManagement/Log',
                },
                {
                  name: 'userManagementDefault',
                  icon: 'smile',
                  path: '/userManagement/userManagementDefault',
                  component: './UserManagement/UserManagementDefault',
                },
                {
                  name: 'groups',
                  icon: 'smile',
                  path: '/userManagement/groupsManagement',
                  component: './UserManagement/GroupsManagement',
                },
                {
                  name: 'roles',
                  icon: 'smile',
                  path: '/userManagement/rolesManagement',
                  component: './UserManagement/RolesManagement',
                },
                {
                  name: 'policy',
                  icon: 'smile',
                  path: '/userManagement/policyManagement',
                  component: './UserManagement/PolicyManagement',
                },
                {
                  name: 'identityProvider',
                  icon: 'smile',
                  path: '/userManagement/identityProvider',
                  component: './UserManagement/IdentityProvider',
                },
              ]
            },
            // 配置管理
            {
              path: '/configuration',
              name: 'configurationManagement',
              icon: 'dashboard',
              routes: [
                {
                  path: '/',
                  redirect: '/configuration/siteManager',
                },
                {
                  name: 'SiteManager',
                  icon: 'smile',
                  path: '/configuration/siteManager',
                  component: './Configuration/SiteManager',
                },
                {
                  name: 'remoteConnection',
                  icon: 'smile',
                  path: '/configuration/remoteConnection',
                  component: './Configuration/remoteConnection',
                },
                {
                  name: 'log',
                  icon: 'smile',
                  path: '/configuration/log',
                  component: './Configuration/Log',
                },
              ]
            },
            // 策略&对象
            {
              path: '/policyObject',
              name: 'policyObject',
              icon: 'dashboard',
              routes: [
                {
                  path: '/',
                  redirect: '/policyObject/ObjectManagement',
                },
                {
                  name: 'ObjectManagement',
                  icon: 'smile',
                  path: '/policyObject/ObjectManagement',
                  component: './PolicyObject/ObjectManagement',
                },
                {
                  name: 'netRules',
                  icon: 'smile',
                  path: '/policyObject/netRules',
                  component: './PolicyObject/NetRules',
                },
                {
                  name: 'policyManagement',
                  icon: 'smile',
                  path: '/policyObject/policyManagement',
                  component: './PolicyObject/PolicyManagement',
                },
                {
                  name: 'log',
                  icon: 'smile',
                  path: '/policyObject/log',
                  component: './PolicyObject/Log',
                },
              ]
            },
            // 监控管理
            {
              path: '/monitoringManagement',
              name: 'monitoring',
              icon: 'dashboard',
              routes: [
                {
                  path: '/',
                  redirect: '/monitoringManagement/sitesMonitoring',
                },
                {
                  name: 'sitesMonitoring',
                  icon: 'smile',
                  path: '/monitoringManagement/sitesMonitoring',
                  component: './MonitoringManagement/SitesMonitoring',
                },
                {
                  name: 'userVPNMonitoring',
                  icon: 'smile',
                  path: '/monitoringManagement/userVPNMonitoring',
                  component: './MonitoringManagement/UserVPNMonitoring',
                },
                {
                  name: 'sessionPolicy',
                  icon: 'smile',
                  path: '/monitoringManagement/sessionPolicy',
                  component: './MonitoringManagement/SessionPolicy',
                },
                {
                  name: 'alertLog',
                  icon: 'smile',
                  path: '/monitoringManagement/alertLog',
                  component: './MonitoringManagement/AlertLog',
                },
              ]
            },
              // 账单管理
              {
                path: '/archivmeHD',
                name: 'archivmeHD',
                icon: 'dashboard',
                routes: [
                  {
                    path: '/',
                    redirect: '/archivmeHD/sitesMonitoring',
                  },
                  {
                    name: 'overview',
                    icon: 'smile',
                    path: '/archivmeHD/overview',
                    component: './ArchivmeHD/Overview',
                  },
                  {
                    name: 'orderManagement',
                    icon: 'smile',
                    path: '/archivmeHD/orderManagement',
                    component: './ArchivmeHD/OrderManagement',
                  }
                
                ]
              },


            {
              path: '/dashboard',
              name: 'dashboard',
              icon: 'dashboard',
              routes: [
                {
                  path: '/',
                  redirect: '/dashboard/analysis',
                },
                {
                  name: 'analysis',
                  icon: 'smile',
                  path: '/dashboard/analysis',
                  component: './dashboard/analysis',
                },
                {
                  name: 'monitor',
                  icon: 'smile',
                  path: '/dashboard/monitor',
                  component: './dashboard/monitor',
                },
                {
                  name: 'workplace',
                  icon: 'smile',
                  path: '/dashboard/workplace',
                  component: './dashboard/workplace',
                },
              ],
            },
            {
              path: '/form',
              icon: 'form',
              name: 'form',
              routes: [
                {
                  path: '/',
                  redirect: '/form/basic-form',
                },
                {
                  name: 'basic-form',
                  icon: 'smile',
                  path: '/form/basic-form',
                  component: './form/basic-form',
                },
                {
                  name: 'step-form',
                  icon: 'smile',
                  path: '/form/step-form',
                  component: './form/step-form',
                },
                {
                  name: 'advanced-form',
                  icon: 'smile',
                  path: '/form/advanced-form',
                  component: './form/advanced-form',
                },
              ],
            },
            {
              path: '/list',
              icon: 'table',
              name: 'list',
              routes: [
                {
                  path: '/list/search',
                  name: 'search-list',
                  component: './list/search',
                  routes: [
                    {
                      path: '/list/search',
                      redirect: '/list/search/articles',
                    },
                    {
                      name: 'articles',
                      icon: 'smile',
                      path: '/list/search/articles',
                      component: './list/search/articles',
                    },
                    {
                      name: 'projects',
                      icon: 'smile',
                      path: '/list/search/projects',
                      component: './list/search/projects',
                    },
                    {
                      name: 'applications',
                      icon: 'smile',
                      path: '/list/search/applications',
                      component: './list/search/applications',
                    },
                  ],
                },
                {
                  path: '/',
                  redirect: '/list/table-list',
                },
                {
                  name: 'table-list',
                  icon: 'smile',
                  path: '/list/table-list',
                  component: './list/table-list',
                },
                {
                  name: 'basic-list',
                  icon: 'smile',
                  path: '/list/basic-list',
                  component: './list/basic-list',
                },
                {
                  name: 'card-list',
                  icon: 'smile',
                  path: '/list/card-list',
                  component: './list/card-list',
                },
              ],
            },
            {
              path: '/profile',
              name: 'profile',
              icon: 'profile',
              routes: [
                {
                  path: '/',
                  redirect: '/profile/basic',
                },
                {
                  name: 'basic',
                  icon: 'smile',
                  path: '/profile/basic',
                  component: './profile/basic',
                },
                {
                  name: 'advanced',
                  icon: 'smile',
                  path: '/profile/advanced',
                  component: './profile/advanced',
                },
              ],
            },
            {
              name: 'result',
              icon: 'CheckCircleOutlined',
              path: '/result',
              routes: [
                {
                  path: '/',
                  redirect: '/result/success',
                },
                {
                  name: 'success',
                  icon: 'smile',
                  path: '/result/success',
                  component: './result/success',
                },
                {
                  name: 'fail',
                  icon: 'smile',
                  path: '/result/fail',
                  component: './result/fail',
                },
              ],
            },
            {
              name: 'exception',
              icon: 'warning',
              path: '/exception',
              routes: [
                {
                  path: '/',
                  redirect: '/exception/403',
                },
                {
                  name: '403',
                  icon: 'smile',
                  path: '/exception/403',
                  component: './exception/403',
                },
                {
                  name: '404',
                  icon: 'smile',
                  path: '/exception/404',
                  component: './exception/404',
                },
                {
                  name: '500',
                  icon: 'smile',
                  path: '/exception/500',
                  component: './exception/500',
                },
              ],
            },
            {
              name: 'account',
              icon: 'user',
              path: '/account',
              routes: [
                {
                  path: '/',
                  redirect: '/account/center',
                },
                {
                  name: 'center',
                  icon: 'smile',
                  path: '/account/center',
                  component: './account/center',
                },
                {
                  name: 'settings',
                  icon: 'smile',
                  path: '/account/settings',
                  component: './account/settings',
                },
              ],
            },
            {
              name: 'editor',
              icon: 'highlight',
              path: '/editor',
              routes: [
                {
                  path: '/',
                  redirect: '/editor/flow',
                },
                {
                  name: 'flow',
                  icon: 'smile',
                  path: '/editor/flow',
                  component: './editor/flow',
                },
                {
                  name: 'mind',
                  icon: 'smile',
                  path: '/editor/mind',
                  component: './editor/mind',
                },
                {
                  name: 'koni',
                  icon: 'smile',
                  path: '/editor/koni',
                  component: './editor/koni',
                },
              ],
            },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
