import React from "react";
import { useAuth } from "../../hooks/auths";
import { AiFillCopy, AiFillDelete, AiOutlineShareAlt } from "react-icons/ai";
import { useDeleteStory, useStoryToggleLike } from "../../hooks/posts";
import MazButton from "../../assets/MazButton";
import LikeButton from "../../assets/LikeButton";
import {
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { FiXOctagon } from "react-icons/fi";
import PostsDemo from "../Demo/PostsDemo";

export const SingleStory = ({ story,Loading,key }) => {
  // Auth-related state and functions
  const { user, isLoading: authLoading } = useAuth();
  const { id, likes, uid } = story;
  const isLiked = likes.includes(user?.id);
  const { toggleStoryLike, isLoading } = useStoryToggleLike({
    id,
    isLiked,
    uid: user?.id,
  });

  // Delete story functionality
  const { deleteStory, isLoading: deleteLoading } = useDeleteStory(id);

  // Toast for notifications
  const toast = useToast();

  // Copy file URL to clipboard
  const copyFileUrl = () => {
    navigator.clipboard.writeText(story.FileUrl).then(() => {
      toast({
        title: "URL Copied",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
    });
  };

  // Share file URL
  const shareFileUrl = () => {
    navigator.share({
      url: story.FileUrl,
    });
  };

  // Modal disclosure
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
    {Loading ? (
      <PostsDemo h="h-96" count={20} />
    ) : (
    <div key={key} className="w-full h-full object-cover relative">
      {!story.isVideo &&
        <img src={story.FileUrl} alt="" className="w-full h-full rounded-md object-cover" />
      }
      {story.isVideo &&
        <video src={story.FileUrl} className="w-full h-full rounded-md object-cover"></video>
      }
      <div className="text-[#fff] z-10 absolute w-full items-start p-2 md:px-4 top-0 text-sm md:text-lg">
        <h2>{story.account}</h2>
        <p className="text-xs opacity-80">{story.created?.date}</p>
      </div>

      <div className="absolute h-auto z-10 w-full gap-1 md:gap-3 flex justify-start items-center p-2 md:p-4 bottom-0">
        {user && (
          <LikeButton
            isUser={user}
            one={authLoading}
            two={isLoading}
            isLiked={isLiked}
            Link={toggleStoryLike}
            count={likes.length}
          />
        )}
        <MazButton Link={copyFileUrl} Icon={<AiFillCopy />} />
        <MazButton Link={shareFileUrl} Icon={<AiOutlineShareAlt />} />
        {/* {!authLoading && user?.email === 'maznaviofficial@gmail.com' (
          <MazButton Link={deleteStory} Icon={<AiFillDelete className="text-xl font-thin" />} />
        )} */}
      </div>

      <div onClick={onOpen} className="absolute opacity-100 lg:opacity-0 hover:opacity-100 text-[#3f2d23] transition-all w-full h-full bg-[#3f2d23] rounded-md bg-opacity-20 cursor-pointer inset-0">
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='whiteAlpha.600' backdropFilter='blur(60px) hue-rotate(90deg)' />
        <ModalContent>
          <ModalCloseButton>
            <FiXOctagon className='absolute z-20 text-[#3f2d23] -top-10 md:top-0 md:-right-12 text-2xl' />
          </ModalCloseButton>
          {!story.isVideo &&
            <img src={story.FileUrl} alt="" className="w-full h-full rounded-md object-cover" />
          }
          {story.isVideo &&
            <video src={story.FileUrl} controls autoplay className="w-full h-full rounded-md object-cover"></video>
          }
        </ModalContent>
      </Modal>
    </div>
    )}
    </>
  );
};