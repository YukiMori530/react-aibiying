import styled from "styled-components";

export const BrowserWrapper = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;

    background-color: #333;

    .top {
      position: relative;
      z-index: 2;
      height: 86px;

      .close-btn {
        position: absolute;
        top: 15px;
        right: 25px;
        cursor: pointer;
      }
    }

  .slider {
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
  }

  .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

    .pic-enter {
      transform: translateX(${props => (props.isNext ? "100%" : "-100%")});
      opacity: 0;
    }

    .pic-enter-active {
      transform: translateX(0);
      opacity: 1;
      transition: transform 200ms ease;
    }

    .pic-exit {
      transform: translateX(0);
      opacity: 1;
    }

    .pic-exit-active {
      transform: translateX(${props => (props.isNext ? "-100%" : "100%")});
      opacity: 0;
      transition: transform 200ms ease;
    }
  }

  .preview {
    height: 100px;
    margin-top: 10px;
  }
`