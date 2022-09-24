// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xuJ96AwQwiTrZC9DsK4jCu
// Component: BqY570oxS4
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: Uc6NxlbWQx2/component
import Button from "../../Button"; // plasmic-import: 3iv-r6L82e0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_nft_eaze_mint.module.css"; // plasmic-import: xuJ96AwQwiTrZC9DsK4jCu/projectcss
import sty from "./PlasmicContract.module.css"; // plasmic-import: BqY570oxS4/css

export const PlasmicContract__VariantProps = new Array();

export const PlasmicContract__ArgProps = new Array();

function PlasmicContract__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__w8Dwr
        )}
      >
        {"Deploy your NFT contract"}
      </div>

      <TextInput
        data-plasmic-name={"nameNft"}
        data-plasmic-override={overrides.nameNft}
        className={classNames("__wab_instance", sty.nameNft)}
        placeholder={"Enter the name of your NFT contract"}
        type={"name"}
      />

      <TextInput
        data-plasmic-name={"symbolNft"}
        data-plasmic-override={overrides.symbolNft}
        className={classNames("__wab_instance", sty.symbolNft)}
        placeholder={"Symbol of your NFT"}
        type={"symbol"}
      />

      <Button
        data-plasmic-name={"submitButton"}
        data-plasmic-override={overrides.submitButton}
        className={classNames("__wab_instance", sty.submitButton)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__i9Usn
          )}
        >
          {"Deploy"}
        </div>
      </Button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "nameNft", "symbolNft", "submitButton"],
  nameNft: ["nameNft"],
  symbolNft: ["symbolNft"],
  submitButton: ["submitButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicContract__ArgProps,
          internalVariantPropNames: PlasmicContract__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicContract__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContract";
  } else {
    func.displayName = `PlasmicContract.${nodeName}`;
  }
  return func;
}

export const PlasmicContract = Object.assign(
  // Top-level PlasmicContract renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    nameNft: makeNodeComponent("nameNft"),
    symbolNft: makeNodeComponent("symbolNft"),
    submitButton: makeNodeComponent("submitButton"),
    // Metadata about props expected for PlasmicContract
    internalVariantProps: PlasmicContract__VariantProps,
    internalArgProps: PlasmicContract__ArgProps
  }
);

export default PlasmicContract;
/* prettier-ignore-end */