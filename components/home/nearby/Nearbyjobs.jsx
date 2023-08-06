
import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
// styles & contants
import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
// components
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
// custon hooks
import useFetch from '../../../hook/useFetch'


const NearbyJobs = () => {

  const router = useRouter();
  const { data, error, isLoading } = useFetch('search', {
    query: "React developer",
    num_pages: "1",
  });

  console.log(data);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <Pressable><Text style={styles.headerBtn}>Show All</Text></Pressable>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>
            Something went wrong
          </Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard 
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              job={job} 
              key={`nearby-job-${job?.job_id}`} 
            />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs