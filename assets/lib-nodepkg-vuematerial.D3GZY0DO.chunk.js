import { s as styled, v as variant, b as alpha, d as defineTransition, t as transition, P as Popper, O as Overlay } from "./lib-nodepkg-vueuikit.BzhbdpiR.chunk.js";
import { j as jsx, f as component, g as ref, b as cloneVNode, w as watch, d as jsxs } from "./lib-nodepkg-vuekit.BuiIu7Tz.chunk.js";
import "./lib-nodepkg-typedef.D-PCYzjh.chunk.js";
import { g as get } from "./vendor-innoai-tech-lodash.DimVzCL6.chunk.js";
const ButtonBase = styled("button")({
  textStyle: "sys.label-large",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  outline: "none",
  overflow: "hidden",
  border: 0,
  margin: 0,
  userSelect: "none",
  cursor: "pointer",
  _disabled: {
    cursor: "not-allowed"
  },
  gap: 8,
  h: 40,
  px: 24,
  rounded: 20,
  transitionDuration: "md4",
  transitionTimingFunction: "standard-accelerate",
  bg: "none",
  pos: "relative",
  zIndex: 1,
  _$before: {
    content: `""`,
    pos: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    transitionDuration: "md1",
    transitionTimingFunction: "standard-accelerate"
  },
  $data_icon: {
    boxSize: 18,
    _data_placement__start: {
      ml: -8
    },
    _data_placement__end: {
      mr: -8
    }
  }
});
const FilledButton = styled(ButtonBase)({
  containerStyle: "sys.primary",
  shadow: "1",
  _hover: {
    shadow: "2",
    _$before: {
      bgColor: variant("white", alpha(0.08))
    }
  },
  _focus: {
    shadow: "2",
    _$before: {
      bgColor: variant("white", alpha(0.12))
    }
  },
  _active: {
    shadow: "2",
    _$before: {
      bgColor: variant("white", alpha(0.12))
    }
  },
  _disabled: {
    shadow: "0",
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    _$before: {
      bgColor: variant("sys.on-surface", alpha(0.12))
    }
  }
});
styled(ButtonBase)({
  color: "sys.primary",
  shadow: "1",
  _$before: {
    bgColor: "sys.surface-container-low"
  },
  _hover: {
    shadow: "2",
    _$before: {
      bgColor: variant("sys.primary", alpha(0.08))
    }
  },
  _focus: {
    shadow: "2",
    _$before: {
      bgColor: variant("sys.primary", alpha(0.12))
    }
  },
  _active: {
    shadow: "2",
    _$before: {
      bgColor: variant("sys.primary", alpha(0.12))
    }
  },
  _disabled: {
    shadow: "0",
    color: variant("sys.on-surface", alpha(0.38)),
    _$before: {
      bgColor: variant("sys.on-surface", alpha(0.12))
    }
  }
});
const TextButton = styled(ButtonBase)({
  extends: [
    {
      px: 16,
      $data_icon: {
        _data_placement__start: {
          ml: -4
        },
        _data_placement__end: {
          mr: -4
        }
      }
    }
  ],
  color: "sys.primary",
  _$before: {
    bgColor: "rgba(0,0,0,0)"
  },
  _hover: {
    _$before: {
      bgColor: variant("sys.primary", alpha(0.08))
    }
  },
  _focus: {
    _$before: {
      bgColor: variant("sys.primary", alpha(0.12))
    }
  },
  _active: {
    _$before: {
      bgColor: variant("sys.primary", alpha(0.12))
    }
  },
  _disabled: {
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    _$before: {
      bgColor: "rgba(0,0,0,0)"
    }
  }
});
styled(ButtonBase)({
  containerStyle: "sys.secondary-container",
  color: "sys.primary",
  shadow: "0",
  _hover: {
    shadow: "1",
    _$before: {
      bgColor: variant("sys.on-secondary-container", alpha(0.08))
    }
  },
  _focus: {
    _$before: {
      bgColor: variant("sys.on-secondary-container", alpha(0.12))
    }
  },
  _active: {
    _$before: {
      bgColor: variant("sys.on-secondary-container", alpha(0.12))
    }
  },
  _disabled: {
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    shadow: "0",
    _$before: {
      bgColor: variant("sys.on-surface", alpha(0.12))
    }
  }
});
styled(ButtonBase)({
  extends: [
    {
      // ensure the order to define border before all
      border: "1px solid"
    }
  ],
  color: "sys.primary",
  bgColor: "rgba(0,0,0,0)",
  borderColor: "sys.outline",
  _hover: {
    bgColor: variant("sys.primary", alpha(0.08))
  },
  _active: {
    bgColor: variant("sys.primary", alpha(0.12))
  },
  _focus: {
    bgColor: variant("sys.primary", alpha(0.12))
  },
  _disabled: {
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    borderColor: variant("sys.on-surface", alpha(0.12))
  }
});
const IconButton = styled(TextButton)({
  boxSize: 40,
  p: 0
});
var mdiCancel = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z";
var mdiCheckBold = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z";
var mdiContentCopy = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";
var mdiHelp = "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z";
var mdiHelpBox = "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z";
var mdiKey = "M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z";
var mdiKeyOutline = "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z";
var mdiMinusBoxOutline = "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z";
var mdiUploadBox = "M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M16 17V15H8V17H16M16 11L12 7L8 11H10.5V14H13.5V11H16Z";
const Icon = styled("span", (props, _) => {
  return (Wrapper) => {
    const size = props.size ?? 24;
    return /* @__PURE__ */ jsx(Wrapper, {
      "data-icon": true,
      "data-placement": props.placement,
      "data-has-size": !!props.size,
      children: /* @__PURE__ */ jsx("svg", {
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        children: /* @__PURE__ */ jsx("path", {
          d: props.path
        })
      })
    });
  };
})({
  display: "inline-block",
  _data_has_size__false: {
    boxSize: "1.2em",
    "& svg": {
      w: "100%",
      h: "100%"
    }
  }
});
const FadeInOutTransition$1 = defineTransition({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  duration: transition.duration.md1,
  easing: transition.easing.standard.accelerate
}, {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  },
  duration: transition.duration.sm4,
  easing: transition.easing.standard.decelerate
});
const TooltipContainer = styled("div")({
  py: 4,
  px: 12,
  rounded: "sm",
  shadow: "3",
  containerStyle: "sys.on-surface",
  pos: "relative",
  zIndex: 100
});
const Tooltip = component((props, param) => {
  let { slots } = param;
  const isOpen = ref(false);
  return () => {
    const child = slots.default()[0];
    return /* @__PURE__ */ jsx(Popper, {
      isOpen: isOpen.value,
      $content: /* @__PURE__ */ jsx(TooltipContainer, {
        children: props.title
      }),
      $transition: (param2) => {
        let { content } = param2;
        return /* @__PURE__ */ jsx(FadeInOutTransition$1, {
          children: content
        });
      },
      children: child ? cloneVNode(child, {
        onMouseover: () => {
          isOpen.value = true;
        },
        onMouseout: () => {
          isOpen.value = false;
        }
      }) : null
    });
  };
});
const MenuContainer = styled("div")({
  py: 8,
  rounded: "sm",
  shadow: "2",
  minW: 120,
  containerStyle: "sys.surface-container",
  pos: "relative",
  zIndex: 100
});
styled("div")({
  "& + &": {
    borderTop: "1px solid",
    borderColor: "sys.outline-variant"
  },
  py: 8,
  px: 16,
  textStyle: "sys.label-large",
  containerStyle: "sys.surface-container",
  _hover: {
    cursor: "pointer",
    bgColor: variant("sys.on-surface", alpha(0.08))
  }
});
component((props, param) => {
  let { slots } = param;
  const isOpen = ref(false);
  return () => {
    var _a;
    const trigger = slots.default ? slots.default()[0] : void 0;
    return /* @__PURE__ */ jsx(Popper, {
      isOpen: isOpen.value,
      placement: props.placement,
      onClickOutside: () => {
        isOpen.value = false;
      },
      $content: /* @__PURE__ */ jsx(MenuContainer, {
        children: (_a = slots.menu) == null ? void 0 : _a.call(slots)
      }),
      children: trigger ? cloneVNode(trigger, {
        onClick: () => {
          isOpen.value = true;
        }
      }) : null
    });
  };
});
const Container = styled("div")({
  pos: "absolute",
  top: 0,
  left: 0,
  h: "100vh",
  w: "100vw",
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
const DialogBackdrop = styled("div")({
  cursor: "pointer",
  pos: "absolute",
  top: 0,
  left: 0,
  h: "100vh",
  w: "100vw",
  zIndex: -1,
  bgColor: variant("sys.scrim", alpha(0.38))
});
styled("div")({
  py: 12,
  rounded: "sm",
  shadow: "3",
  minW: "50vw",
  containerStyle: "sys.surface-container-high"
});
const FadeInOutTransition = defineTransition({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  duration: transition.duration.md1,
  easing: transition.easing.standard.accelerate
}, {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  },
  duration: transition.duration.sm4,
  easing: transition.easing.standard.accelerate
});
const Dialog = component((props, param) => {
  let { slots, emit } = param;
  const mount = ref(props.isOpen ?? false);
  const animateEnterOrLeave = ref(false);
  watch(() => props.isOpen, (open) => {
    if (open === true) {
      mount.value = true;
    } else if (open === false) {
      animateEnterOrLeave.value = false;
    }
  });
  return () => {
    var _a;
    return /* @__PURE__ */ jsx(Overlay, {
      isOpen: mount.value,
      onContentBeforeMount: () => {
        animateEnterOrLeave.value = true;
      },
      onEscKeydown: () => {
        animateEnterOrLeave.value = false;
      },
      children: /* @__PURE__ */ jsxs(Container, {
        children: [
          /* @__PURE__ */ jsx(FadeInOutTransition, {
            onComplete: (t) => {
              if (t === "leave") {
                mount.value = false;
                emit("close");
              }
            },
            children: animateEnterOrLeave.value ? /* @__PURE__ */ jsx(DialogBackdrop, {
              onClick: () => {
                animateEnterOrLeave.value = false;
              }
            }) : null
          }),
          (_a = slots.default) == null ? void 0 : _a.call(slots)
        ]
      })
    });
  };
});
styled("label", (props, param) => {
  let { slots } = param;
  return (Wrap) => {
    var _a, _b, _c;
    let valued = props.valued;
    const invalid = props.invalid;
    let disabled = props.disabled;
    const children = (((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? []).map((c) => {
      if (c.type === "input") {
        valued = !!get(c.props, [
          "value"
        ], get(c.props, [
          "placeholder"
        ], valued));
        disabled = get(c.props, [
          "disabled"
        ], disabled);
        return cloneVNode(c, {
          disabled
        });
      }
      return cloneVNode(c);
    });
    return /* @__PURE__ */ jsxs(Wrap, {
      "data-valued": valued,
      "data-invalid": invalid,
      "data-disabled": disabled,
      "data-focus-within": props.focus,
      "data-has-leading": !!slots.leading,
      "data-has-trailing": !!slots.trailing,
      children: [
        /* @__PURE__ */ jsxs("div", {
          "data-input-container": "",
          children: [
            slots.leading && /* @__PURE__ */ jsx(Maker, {
              role: "leading",
              children: slots.leading()
            }),
            /* @__PURE__ */ jsx("div", {
              "data-input-label": "",
              children: (_b = slots.label) == null ? void 0 : _b.call(slots)
            }),
            children,
            slots.trailing && /* @__PURE__ */ jsx(Maker, {
              role: "trailing",
              children: slots.trailing()
            })
          ]
        }),
        slots.supporting && /* @__PURE__ */ jsx("div", {
          "data-input-supporting": "",
          children: (_c = slots.supporting) == null ? void 0 : _c.call(slots)
        })
      ]
    });
  };
})({
  display: "block",
  pos: "relative",
  textStyle: "sys.body-large",
  $data_input_container: {
    pos: "relative"
  },
  $data_input: {
    outline: "none",
    flex: 1,
    w: "100%",
    m: 0,
    px: 16,
    py: 4,
    minHeight: 56,
    bg: "none",
    border: "none",
    cursor: "text",
    "&[readonly]": {
      cursor: "pointer"
    },
    bgColor: "sys.surface-container-highest",
    color: "sys.on-surface",
    roundedTop: "xs",
    borderBottom: "1px solid",
    borderColor: "sys.outline-variant",
    textStyle: "sys.body-large",
    transitionDuration: "sm1",
    transitionTimingFunction: "standard"
  },
  $data_input_label: {
    pos: "absolute",
    top: 4,
    bottom: 4,
    left: 16,
    color: "sys.on-surface-variant",
    display: "flex",
    alignItems: "center",
    transitionDuration: "sm2",
    transitionTimingFunction: "standard-accelerate"
  },
  $data_input_supporting: {
    textStyle: "sys.body-small",
    px: 16,
    pt: 4,
    display: "flex",
    gap: 16,
    color: "sys.on-surface-variant"
  },
  _has_leading: {
    $data_input: {
      pl: 16 + 20
    },
    $data_input_label: {
      left: 16 + 20
    }
  },
  _has_trailing: {
    $data_input: {
      pr: 12 + 20
    }
  },
  _valued: {
    $data_input: {
      pt: 18
    },
    $data_input_label: {
      top: 8,
      bottom: "auto",
      textStyle: "sys.body-small"
    }
  },
  _focusWithin: {
    $data_input: {
      pt: 18,
      borderBottom: "2px solid",
      borderColor: "sys.primary"
    },
    $data_input_label: {
      top: 8,
      bottom: "auto",
      textStyle: "sys.body-small",
      color: "sys.primary"
    }
  },
  _invalid: {
    $data_input: {
      borderBottom: "2px solid",
      borderColor: "sys.error"
    },
    $data_input_label: {
      color: "sys.error"
    },
    $data_input_supporting: {
      color: "sys.error"
    }
  },
  _disabled: {
    opacity: 0.38,
    cursor: "not-allowed"
  }
});
const Maker = styled("div")({
  pos: "absolute",
  top: 4,
  bottom: 4,
  display: "flex",
  alignItems: "center",
  color: "sys.on-surface-variant",
  _role__leading: {
    left: 12,
    $data_icon: {
      ml: -4
    }
  },
  _role__trailing: {
    right: 12,
    $data_icon: {
      mr: -4
    }
  }
});
export {
  Dialog as D,
  FilledButton as F,
  IconButton as I,
  Tooltip as T,
  Icon as a,
  mdiContentCopy as b,
  mdiCancel as c,
  mdiCheckBold as d,
  mdiMinusBoxOutline as e,
  mdiUploadBox as f,
  mdiKeyOutline as g,
  mdiKey as h,
  mdiHelp as i,
  mdiHelpBox as m
};
