"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next-intl/link";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

import { Avatar, Dropdown, Layout, Menu, Typography, MenuProps } from "antd";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const DashboardStyled = styled.div`
  > div {
    > aside {
      background: #fff !important;
      width: 300px;

      > div {
        > div {
          text-align: left;
          padding: 16px 24px;

          > img {
            height: 40px;
          }
        }

        > .collapsed {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 0;
        }
      }
    }

    > div {
      min-height: 100vh;

      > header {
        margin: 0 16px;
        padding: 0 24px !important;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        left: 250px;
        right: 0;
        z-index: 1;
        backdrop-filter: saturate(180%) blur(5px);
        background: hsla(0, 0%, 100%, 0.8) !important;
        transition: all 0.2s ease;

        .trigger {
          font-size: 18px;
          cursor: pointer;
          transition: color 0.3s;
        }

        .trigger:hover {
          color: #e53540;
        }
      }

      > main {
        transition: all 0.2s ease;
        padding-left: 250px;
        margin: 88px 16px 24px 16px;
      }
    }
  }
`;

const nav = [
  {
    key: "/events",
    icon: <UsergroupAddOutlined />,
    label: "Оформить заказ",
    component: <p>jkashfjk</p>,
  },
  {
    key: "/myShift",
    icon: <HomeOutlined />,
    label: "Моя смена",
    component: <p>kjashj</p>,
  },
  {
    key: "/history",
    icon: <HomeOutlined />,
    label: "История заказов",
    component: <p>mna,m</p>,
  },
  {
    key: "/tickets",
    icon: <UsergroupAddOutlined />,
    label: "Билеты",
    children: [
      {
        key: "/refund",
        label: "Возврат билетов",
        component: <p>mn,dmasd</p>,
      },
      {
        key: "/print",
        label: "Распечатать билет",
        component: <p>m,nad,m</p>,
      },
    ],
  },
];

const Carcas = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleItemDropdownClick: MenuProps["onClick"] = (e) => {
    if (e.key === "1" || e.key === "2" || e.key === "4") {
      setIsOpenDropdown(false);
    }
  };
  const handleLogout = () => {
    // dispatch(isAuthAC(false));
    localStorage.removeItem("at");
    localStorage.removeItem("rt");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "userInfo?.login",
      icon: <UserOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "4",
      danger: true,
      label: "Выйти",
      onClick: handleLogout,
    },
  ];

  return (
    <DashboardStyled>
      <Layout>
        <Sider
          width={250}
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className={`logo ${collapsed ? "collapsed" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="30"
              fill="none"
            >
              <g clip-path="url(#logo_svg__a)">
                <g clip-path="url(#logo_svg__b)">
                  <path
                    fill="#373435"
                    d="M62.26 23.879V7.596h7.05q1.115.002 2.037.218c.615.144 1.147.38 1.606.7q.68.482 1.06 1.29.376.807.375 2.045c0 .677-.151 1.303-.454 1.887a3.06 3.06 0 0 1-1.344 1.336c.79.26 1.408.71 1.867 1.345q.682.953.683 2.518 0 1.404-.522 2.356a4.15 4.15 0 0 1-1.431 1.53c-.606.385-1.312.654-2.115.816q-1.205.243-2.569.242H62.26m3.253-9.637h2.981q.613.001 1.115-.116c.335-.074.614-.2.84-.366.228-.167.403-.38.522-.63q.182-.378.183-.887c.014-.459-.082-.802-.298-1.025-.21-.222-.5-.375-.862-.459a5.5 5.5 0 0 0-1.23-.125h-3.251v3.613zm0 6.6h3.366a7 7 0 0 0 1.147-.094c.358-.06.67-.167.945-.31a1.6 1.6 0 0 0 .647-.608q.239-.392.238-.964 0-.53-.192-.886a1.6 1.6 0 0 0-.546-.585 2.3 2.3 0 0 0-.821-.32 5.5 5.5 0 0 0-1.037-.092h-3.752v3.863zM78.82 10.541q-.888 0-1.432-.543-.544-.542-.546-1.39-.001-.898.57-1.448.57-.55 1.43-.551.797 0 1.376.542t.578 1.438c0 .598-.188 1.052-.56 1.414q-.555.543-1.421.543zM77.227 23.88V11.756h3.183V23.88zM82.938 23.879V7.596h3.183V23.88zM94.13 24.04q-1.886 0-3.206-.76a5.04 5.04 0 0 1-2.023-2.152q-.708-1.39-.707-3.255c0-1.243.243-2.356.73-3.302a5.47 5.47 0 0 1 2.06-2.221q1.328-.807 3.15-.807c.908 0 1.711.152 2.4.459a4.95 4.95 0 0 1 1.751 1.289 5.5 5.5 0 0 1 1.069 1.92c.234.728.344 1.516.33 2.356q-.001.321-.023.621t-.091.598h-8.21q.068.69.385 1.266c.21.385.513.687.898.91q.579.333 1.445.333.572 0 1.046-.125.477-.125.821-.404c.23-.185.385-.398.477-.644h3.138q-.296 1.355-1.106 2.23a4.76 4.76 0 0 1-1.945 1.276 7.1 7.1 0 0 1-2.39.403zm-2.707-7.498h5.211a2.66 2.66 0 0 0-.307-1.16 2.2 2.2 0 0 0-.84-.871q-.556-.334-1.421-.334-.868.001-1.445.343c-.386.232-.675.524-.863.886a3 3 0 0 0-.33 1.136zM106.615 24.041c-1.348 0-2.348-.385-2.99-1.15-.647-.765-.968-1.818-.968-3.149v-5.106h-1.798v-2.875h1.798V7.596h3.183v4.165h3.637v2.875h-3.637v4.438q.001.597.147 1.034.15.44.5.677c.234.163.56.242.968.242q.543.001.922-.172c.247-.116.458-.241.623-.38l1 2.485q-.474.392-1.059.631a5.2 5.2 0 0 1-1.17.343q-.59.104-1.16.102z"
                  ></path>
                  <path
                    fill="#DC153D"
                    d="M54.652 9.535s.04-.01.055-.019a2.9 2.9 0 0 0 1.967-2.76V2.719c0-1.164-.936-2.11-2.087-2.11H2.092A2.104 2.104 0 0 0 0 2.717v4.039c0 1.284.83 2.379 1.968 2.76.013.008.036.013.055.018a5.82 5.82 0 0 1 3.743 5.463 5.83 5.83 0 0 1-3.743 5.463A2.904 2.904 0 0 0 0 23.239v4.039c0 1.164.94 2.114 2.092 2.114h52.5c1.151 0 2.087-.95 2.087-2.114v-4.04a2.91 2.91 0 0 0-1.968-2.759c-.014-.01-.036-.014-.055-.018a5.82 5.82 0 0 1-3.743-5.463 5.83 5.83 0 0 1 3.743-5.463zm-31.98 6.168a4.94 4.94 0 0 1-2.215 1.878q-1.405.617-3.174.617h-2.715v4.795h-3.179V7.068h6.137c1.202 0 2.247.185 3.147.551q1.348.55 2.077 1.753.735 1.21.734 3.205c0 1.247-.266 2.286-.807 3.126zm10.064-1.707h-.739c-.697 0-1.302.116-1.82.357a2.5 2.5 0 0 0-1.189 1.127c-.28.506-.412 1.16-.412 1.957v5.556H25.46V11.139h2.803l.202 1.42q.448-.677 1-1.025.556-.35 1.155-.469a6 6 0 0 1 1.225-.13c.193 0 .367.01.532.014.16.005.285.01.358.01zm11.843 6.349a5.06 5.06 0 0 1-2.023 2.082c-.871.478-1.903.714-3.105.714s-2.22-.241-3.115-.728a5.1 5.1 0 0 1-2.064-2.087c-.49-.909-.738-1.98-.738-3.232s.248-2.37.748-3.293a5.27 5.27 0 0 1 2.077-2.124q1.336-.745 3.064-.747c1.151 0 2.22.26 3.096.765.881.51 1.555 1.225 2.046 2.139s.734 2.012.734 3.283-.239 2.323-.716 3.227z"
                  ></path>
                  <path
                    fill="#DC153D"
                    d="M19.865 10.36c.491.44.734 1.095.734 1.957 0 .974-.293 1.697-.876 2.18q-.873.717-2.367.719h-2.793V9.702h2.958c1.074 0 1.854.222 2.344.658M41.946 15.55a2.77 2.77 0 0 0-.89-1.23c-.403-.32-.959-.477-1.651-.477s-1.21.158-1.633.478c-.413.324-.71.737-.899 1.229a4.3 4.3 0 0 0-.28 1.549c0 .538.092 1.075.28 1.553q.28.719.899 1.174c.418.3.959.45 1.633.45s1.225-.15 1.642-.45q.625-.454.899-1.179.281-.736.28-1.548a4.3 4.3 0 0 0-.28-1.55m0 0a2.77 2.77 0 0 0-.89-1.23c-.403-.32-.959-.477-1.651-.477s-1.21.158-1.633.478c-.413.324-.71.737-.899 1.229a4.3 4.3 0 0 0-.28 1.549c0 .538.092 1.075.28 1.553q.28.719.899 1.174c.418.3.959.45 1.633.45s1.225-.15 1.642-.45q.625-.454.899-1.179.281-.736.28-1.548a4.3 4.3 0 0 0-.28-1.55m-.89-1.23c-.403-.32-.959-.477-1.651-.477s-1.21.158-1.633.478c-.413.324-.71.737-.899 1.229a4.3 4.3 0 0 0-.28 1.548c0 .538.092 1.076.28 1.554s.486.872.899 1.173c.418.302.959.45 1.633.45s1.225-.148 1.642-.45a2.53 2.53 0 0 0 .899-1.178q.281-.736.28-1.549a4.3 4.3 0 0 0-.28-1.548 2.77 2.77 0 0 0-.89-1.23"
                  ></path>
                </g>
              </g>
              <defs>
                <clipPath id="logo_svg__a">
                  <path fill="#fff" d="M0 .607h110v28.785H0z"></path>
                </clipPath>
                <clipPath id="logo_svg__b">
                  <path fill="#fff" d="M0 .607h110v28.785H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>

          <Menu
            mode="inline"
            defaultSelectedKeys={["/main"]}
            // selectedKeys={[location.pathname]}
          >
            {nav.map((el: any) => {
              if (!el?.component) {
                return (
                  <Menu.SubMenu key={el.key} title={el.label} icon={el.icon}>
                    {el?.children.map((elCh: any) => (
                      <Menu.Item key={`${el.key}${elCh.key}`}>
                        <Link
                          href={`${el.key}${elCh.key}`}
                          legacyBehavior
                          passHref
                        >
                          {elCh.label}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              }
              return (
                <Menu.Item key={el.key}>
                  <Link href={el.key} legacyBehavior passHref>
                    <span>
                      <span className="mr-1">{el.icon}</span> {el.label}
                    </span>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ left: collapsed ? "80px" : "250px" }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                // onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className={"flex items-center gap-x-2.5"}>
              <div className={"text-right"} style={{ lineHeight: "0px" }}>
                <Title className={"!mb-0 !mt-0 !mr-1"} level={5}>
                  {/* {userInfo?.last_name} {userInfo?.first_name} */}
                </Title>
                <Text strong type={"secondary"} className={"!text-sm !mr-1"}>
                  {/* {userInfo?.point_of_sale?.address} */}
                </Text>
              </div>

              <Dropdown
                menu={{
                  items,
                  onClick: handleItemDropdownClick,
                }}
                trigger={["click"]}
                open={isOpenDropdown}
                onOpenChange={(flag) => setIsOpenDropdown(flag)}
              >
                <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
              </Dropdown>
            </div>
          </Header>

          <Content
            style={{
              paddingLeft: collapsed ? "80px" : "250px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </DashboardStyled>
  );
};

export default Carcas;
