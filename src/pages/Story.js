import React, { useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import withHelmet from '../utils/withHelmet'
async function getPost (id) {
  const reponse = await fetch.get(``)
  return reponse.json()
}
function usePostData (postId) {
  const [post, setPost] = useState({})
  const [isLoading, setLoading] = useState({})
  const [error, setError] = useState({})
  async function reteiveData () {
    try {
      setLoading(true)
      const postResponse = await getPost(postId)
      setPost(postResponse)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }
  return [{ post, isLoading, error }, {reteiveData}]
}

function Story () {
  const { storyId } = useParams()
  const [{ story, isLoading, error }, { reteiveData }] = usePostData(storyId)
  useEffect(() => {
    reteiveData()
  }, [reteiveData])
  if (isLoading) { return <div>...loading</div>}
  return <div> Story page {storyId} </div>
}
export default withHelmet('Blog App | Story')(Story)