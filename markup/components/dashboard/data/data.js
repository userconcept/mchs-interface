dashboard: {
    navLeft: {
        className: 'dashboard__nav-left',
        list: {
            item1: {
                buttonIcon: {
                    className: 'nav-left__button-icon',
                    href: "#",
                    icon: {
                        className: 'icon icon_constructor button-icon__icon',
                        name: 'icon_constructor',
                        width: 24,
                        height: 24
                    },
                    text: 'Constructor'
                }
            },
            item2: {
                buttonIcon: {
                    className: 'nav-left__button-icon',
                    href: "#",
                    icon: {
                        className: 'icon icon_calendar button-icon__icon',
                        name: 'icon_calendar',
                        width: 24,
                        height: 24
                    },
                    text: 'Calendar'
                }
            },
            item3: {
                buttonIcon: {
                    className: 'nav-left__button-icon',
                    href: "#",
                    icon: {
                        className: 'icon icon_window button-icon__icon',
                        name: 'icon_window',
                        width: 24,
                        height: 24
                    },
                    text: 'Window'
                }
            },
            item4: {
                active: true,
                buttonIcon: {
                    className: 'nav-left__button-icon',
                    href: "#",
                    icon: {
                        className: 'icon icon_gear button-icon__icon',
                        name: 'icon_gear',
                        width: 24,
                        height: 24
                    },
                    text: 'Settings'
                }
            }
        },
        buttonRounded: {
            button: true,
            className: 'nav-left__button-rounded',
            icon: {
                className: 'icon icon_arrow_right_rounded button-rounded__icon',
                name: 'icon_arrow_right_rounded',
                width: 40,
                height: 40
            },
            text: 'Left Navigation Open'
        }
    },
    info: {
        className: 'dashboard__info',
        infoHeader: {
            className: 'info__info-header',
            items: {
                item1: {
                    active: true,
                    text: 'Основная информация',
                    href: '#'
                },
                item2: {
                    text: 'Настройки формирования окон',
                    href: '#'
                }
            }
        },
        infoBody: {
            className: 'info__info-body',
            items: {
                item1: {
                    className: 'info-body__info-item',
                    title: {
                        level: '3',
                        className: 'info-item__title',
                        text: 'Адрес'
                    },
                    address: {
                        className: 'info-item__address',
                        text: '108830 г. Москва,пос ЛМС Центральный пруд, р-н больницы 55.31437.185'
                    }
                },
                item2: {
                    className: 'info-body__info-item',
                    title: {
                        level: '3',
                        className: 'info-item__title',
                        text: 'Родительское отделение'
                    },
                    buttonToggle: {
                        className: 'info-item__button-toggle',
                        text: 'Разрешить родительскому отделению вносить изменения в расписание',
                        id: 'button-toggle-checkbox',
                        name: 'button-toggle-checkbox'
                    },
                    text: {
                        className: 'info-item__text',
                        text: 'Главное отделение ГИМС МЧС России по Московской области'
                    }
                },
                item3: {
                    className: 'info-body__info-item',
                    title: {
                        level: '3',
                        className: 'info-item__title',
                        text: 'Дочерние отделения'
                    },
                    search: {
                        className: 'info-item__search',
                        searchHeader: {
                            className: 'search__search-header',
                            input: {
                                className: 'search-header__input',
                                text: true,
                                id: 'search-header-input-1',
                                name: 'search-header-input-1',
                                placeholder: 'Введите название дочернего подразделения'
                            },
                            buttonIcon: {
                                button: true,
                                className: 'search-header__button-icon',
                                icon: {
                                    className: 'icon icon_search search-header__icon',
                                    name: 'icon_search',
                                    width: 24,
                                    height: 24
                                },
                                text: 'Search'
                            }
                        },
                        searchBody: {
                            className: 'search__search-body',
                            items: {
                                item1: {
                                    text: 'Восточное отделение Центра ГИМС  Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item2: {
                                    text: 'Западное отделение Центра ГИМС (управление) Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item3: {
                                    text: 'Южное отделение Центра ГИМС Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item4: {
                                    text: 'Центральное отделение Центра ГИМС (управление) Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item5: {
                                    text: 'Восточное отделение Центра ГИМС  Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item6: {
                                    text: 'Восточное отделение Центра ГИМС  Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item7: {
                                    text: 'Западное отделение Центра ГИМС (управление) Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item8: {
                                    text: 'Южное отделение Центра ГИМС Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item9: {
                                    text: 'Центральное отделение Центра ГИМС (управление) Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item10: {
                                    text: 'Восточное отделение Центра ГИМС  Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item11: {
                                    text: 'Южное отделение Центра ГИМС Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item12: {
                                    text: 'Центральное отделение Центра ГИМС (управление) Главного управления МЧС России по Московской области',
                                    href: '#'
                                },
                                item13: {
                                    text: 'Восточное отделение Центра ГИМС  Главного управления МЧС России по Московской области',
                                    href: '#'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    sidebar: {
        className: 'dashboard__sidebar',
        notifications: {
            className: 'sidebar__notifications',
            title: {
                level: '3',
                className: 'notifications__title',
                text: 'Уведомления'
            },
            notificationsList: {
                className: 'notifications__notifications-list',
                list: {
                    item1: {
                        className: 'notifications-list__notifications-item',
                        text: {
                            className: 'notifications-item__text',
                            text: 'Внесены изменения в расписание четверга'
                        },
                        time: {
                            className: 'notifications-item__time',
                            text: '20.11.2020 15:32',
                            datetime: '2020-11-20 15:32'
                        }
                    },
                    item2: {
                        className: 'notifications-list__notifications-item',
                        text: {
                            className: 'notifications-item__text',
                            text: 'Внесены изменения в формирование окон'
                        },
                        time: {
                            className: 'notifications-item__time',
                            text: '20.11.2020 11:28',
                            datetime: '2020-11-20 11:28'
                        }
                    },
                    item3: {
                        className: 'notifications-list__notifications-item',
                        text: {
                            className: 'notifications-item__text',
                            text: 'Внесены изменения в формирование окон Западного отделения Центра ГИМС (управление) Главного управления МЧС России по Московской области'
                        },
                        time: {
                            className: 'notifications-item__time',
                            text: '12.11.2020 10:22',
                            datetime: '2020-11-12 10:22'
                        }
                    },
                    item4: {
                        className: 'notifications-list__notifications-item',
                        text: {
                            className: 'notifications-item__text',
                            text: 'Внесены изменения в формирование окон'
                        },
                        time: {
                            className: 'notifications-item__time',
                            text: '25.10.2020 09:48',
                            datetime: '2020-10-25 09:48'
                        }
                    },
                    item5: {
                        className: 'notifications-list__notifications-item',
                        text: {
                            className: 'notifications-item__text',
                            text: 'Внесены изменения в расписание среды'
                        },
                        time: {
                            className: 'notifications-item__time',
                            text: '21.10.2020 10:15',
                            datetime: '2020-10-21 10:15'
                        }
                    }
                }
            },
            link: {
                button: true,
                className: 'notifications__link',
                text: 'Ещё уведомления',
                href: '#'
            }
        }
    }
}
